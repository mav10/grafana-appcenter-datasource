import defaults from 'lodash/defaults';

import { DataQueryRequest, DataQueryResponse, DataSourceApi, DataSourceInstanceSettings, FieldType, MutableDataFrame } from '@grafana/data';
import { BackendSrv as BackendService, getBackendSrv as getBackendService } from '@grafana/runtime';
import {
  BranchWithBuild,
  BuildFieldType,
  BuildInfo,
  BuildStates,
  DataSourceOptions,
  defaultQuery,
  MobileApplication,
  MyQuery,
  RawTestReport,
  RawTestRun,
  ReportBody,
  RequestOptions,
  TestFieldType,
  TestRun,
} from './types';

export class DataSource extends DataSourceApi<MyQuery, DataSourceOptions> {
  private Url: string;
  private ApiKey: string;
  private BackendService: BackendService;

  constructor(instanceSettings: DataSourceInstanceSettings<DataSourceOptions>) {
    super(instanceSettings);

    if (!instanceSettings.url) {
      throw new Error('There is no server address! Please (re)configure datasource!');
    }

    this.BackendService = getBackendService();

    this.Url = instanceSettings.url;
    this.ApiKey = instanceSettings.jsonData.key;
  }

  async query(options: DataQueryRequest<MyQuery>): Promise<DataQueryResponse> {
    const asyncData = options.targets.map(async target => {
      if (!target.application) {
        console.warn('Application is not chosen! Will not fetch data');
        return;
      }

      if (target.metric === 'build') {
        const query = defaults(target, defaultQuery);
        const appInfo: BuildInfo | undefined = await this.getLatestBuilds(target.application, target.owner, target.branch);
        const targetField = query.filedValue as BuildFieldType;

        if (appInfo) {
          return new MutableDataFrame({
            refId: query.refId,
            length: 1,
            name: target.application + targetField,
            fields: [{ name: target.application + targetField, values: [appInfo[targetField]], type: FieldType.string }],
          });
        }
        return;
      }

      if (target.metric === 'testRun') {
        const query = defaults(target, defaultQuery);
        const testInfo: RawTestRun | undefined = await this.getLatestTestRunByPlatform(
          target.application,
          target.owner,
          target.testSeriesName,
          target.platform
        );
        const targetField = query.filedValue as TestFieldType;

        let screenShot = '';
        if (targetField === 'image' && testInfo) {
          screenShot = await this.getTestRunScreenShots(target.application, target.owner, testInfo.id);
        }

        if (testInfo) {
          const targetObject: TestRun = {
            id: testInfo.id,
            status: testInfo.status === 'passed' ? 100 : 0,
            date: testInfo.date,
            image: screenShot,
          };
          return new MutableDataFrame({
            refId: query.refId,
            length: 1,
            name: target.application + targetField,
            fields: [{ name: target.application + targetField, values: [targetObject[targetField]], type: FieldType.string }],
          });
        }

        return;
      }

      return;
    });

    const data = await Promise.all(asyncData);
    return { data };
  }

  async testDatasource() {
    // Implement a health check for your data source.

    return {
      status: 'success',
      message: 'Success',
    };
  }

  async getLatestBuilds(appName: string, owner: string, branch: string): Promise<BuildInfo | undefined> {
    const url = `${this.Url}/v0.1/apps/${owner}/${appName}/branches`;
    const response = await this.doRequest(url);

    const branchesWithBuilds: BranchWithBuild[] = response.map((rawBuild: any) => {
      return {
        branch: rawBuild.branch.name,
        buildInfo: rawBuild.lastBuild,
      };
    });

    const targetRawBuild = branchesWithBuilds.find(x => x.branch === branch);

    if (targetRawBuild && targetRawBuild.buildInfo) {
      const info = targetRawBuild.buildInfo;
      return {
        id: info.id,
        version: info.buildNumber,
        status: this.mapStatusToBuildStates(info.status, info.result),
        date: info.finishTime,
      };
    }
    return undefined;
  }

  async getLatestTestRunByPlatform(appName: string, owner: string, testSeries: string, platform: string): Promise<RawTestRun | undefined> {
    if (!(appName && owner && testSeries && platform)) {
      throw Error('Not all params  were passed! try to re-set all field and repeat oe more time');
    }

    const url = `${this.Url}/v0.1/apps/${owner}/${appName}/test_series/${testSeries}/test_runs`;
    const response = await this.doRequest(url);

    const testRuns: RawTestRun[] = response.map((rawTestRun: RawTestRun) => rawTestRun);
    const targetPlatformTestRuns: RawTestRun[] = testRuns
      .filter(x => x.platform.toLowerCase() === platform)
      .sort((prev, next) => prev.date.localeCompare(next.date));

    return targetPlatformTestRuns.length > 0 ? targetPlatformTestRuns[targetPlatformTestRuns.length - 1] : undefined;
  }

  async getTestRunScreenShots(appName: string, owner: string, testId: string): Promise<any> {
    if (!(appName && owner && testId)) {
      throw Error('Could not get testId');
    }

    const url = `${this.Url}/v0.1/apps/${owner}/${appName}/test_runs/${testId}/report`;
    const response: RawTestReport = await this.doRequest(url);

    const reportUrls: string[] = [];
    const lastTestFeature = response.features.findIndex(x => x.name.toLowerCase().includes('test'));
    response.features[lastTestFeature].tests.forEach(test =>
      test.runs.forEach(run =>
        run.steps.forEach(step => {
          reportUrls.push(step.step_report_url);
        })
      )
    );

    const screenShotUrls: string[] = [];
    for (let i = 0; i < reportUrls.length; i++) {
      const body: ReportBody = await this.doRequest(reportUrls[i]);
      if (body && body.deviceScreenshots.length > 0) {
        screenShotUrls.push(body.deviceScreenshots[0].screenshot.urls.large);
      }
    }

    return screenShotUrls[0];
  }

  async getAppList(): Promise<MobileApplication[]> {
    const url = `${this.Url}/v0.1/apps`;
    const response = await this.doRequest(url);

    return response.map((rawApp: any) => ({
      id: rawApp.id,
      internalName: rawApp.name,
      displayName: rawApp.display_name,
      owner: rawApp.owner.name,
    }));
  }

  async doRequest(url: string): Promise<any> {
    const options: RequestOptions = {
      url: url,
      method: 'GET',
      headers: {
        'X-API-Token': this.ApiKey,
      },
    };

    const response = await this.BackendService.datasourceRequest(options);
    return response.data;
  }

  mapStatusToBuildStates(status: string, result: string) {
    if (status !== 'completed') {
      return status === 'inProgress' ? BuildStates.PENDING : BuildStates.QUEUED;
    } else if (result !== null && result === 'succeeded') {
      return BuildStates.SUCCESS;
    } else {
      return BuildStates.FAILED;
    }
  }
}
