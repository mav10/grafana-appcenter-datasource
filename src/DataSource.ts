import defaults from 'lodash/defaults';

import { DataQueryRequest, DataQueryResponse, DataSourceApi, DataSourceInstanceSettings, MutableDataFrame, FieldType } from '@grafana/data';
import { BackendSrv as BackendService, getBackendSrv as getBackendService } from '@grafana/runtime';
import { MyQuery, DataSourceOptions, defaultQuery, RequestOptions, MobileApplication } from './types';

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
    this.ApiKey = '097562597c29a2d7483ad8bd799f9214804ed4c6';
  }

  async query(options: DataQueryRequest<MyQuery>): Promise<DataQueryResponse> {
    const { range } = options;
    const from = range.from.valueOf();
    const to = range.to.valueOf();

    const data = options.targets.map(target => {
      const query = defaults(target, defaultQuery);
      console.log('quryDef', query);
      return new MutableDataFrame({
        refId: query.refId,
        fields: [
          { name: 'Time', values: [from, to], type: FieldType.time },
          { name: 'Value', values: [query.application, query.application], type: FieldType.string },
        ],
      });
    });

    return { data };
  }

  async testDatasource() {
    // Implement a health check for your data source.

    return {
      status: 'success',
      message: 'Success',
    };
  }

  async getAppList(): Promise<MobileApplication[]> {
    const url = `${this.Url}/v0.1/apps`;
    const response = await this.doRequest(url);

    return response.map((rawApp: any) => ({
      id: rawApp.id,
      name: rawApp.name,
    }));
  }

  async doRequest(url: string): Promise<any> {
    const options: RequestOptions = {
      url: url,
      method: 'GET',
      headers: {
        'X-APi-Token': this.ApiKey,
      },
    };

    const response = await this.BackendService.datasourceRequest(options);
    return response.data;
  }
}
