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
  RequestOptions,
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
            fields: [{ name: targetField, values: [appInfo[targetField]], type: FieldType.string }],
          });
        }
        return;
      }

      if (target.metric === 'testRun') {
        console.warn('Sorry but testRun target currently unsupported');
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
    } else {
      return BuildStates.FAILED;
    }
  }
}
