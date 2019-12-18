import defaults from 'lodash/defaults';

import React, { ChangeEvent, PureComponent } from 'react';
import { FormField, Select } from '@grafana/ui';
import { QueryEditorProps, SelectableValue } from '@grafana/data';
import { DataSource } from './DataSource';
import {
  BuildFieldOptions,
  BuildFieldType,
  DataSourceOptions,
  defaultQuery,
  MetricType,
  MobileApplication,
  MyQuery,
  TestFieldOptions,
  TestFieldType,
} from './types';

type Props = QueryEditorProps<DataSource, MyQuery, DataSourceOptions>;

interface State {
  apps: Array<SelectableValue<MobileApplication>>;
}

export class QueryEditor extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      apps: [],
    };
  }

  async componentDidMount() {
    const appsFromDS = await this.props.datasource.getAppList();
    const appList: Array<SelectableValue<MobileApplication>> = appsFromDS.map((app: MobileApplication) => ({
      value: { ...app },
      label: app.displayName,
    }));
    this.setState({ apps: appList });
  }

  onAppChange = (event: SelectableValue<MobileApplication>) => {
    const { onChange, query } = this.props;
    const application = event.value;

    if (application) {
      const platform = application.internalName.toLowerCase().includes('ios') ? 'ios' : 'android';
      onChange({ ...query, application: application.internalName, owner: application.owner, platform: platform });
    } else {
      throw new Error('Application is not chosen! Please select target app from the first column of query.');
    }
  };

  onMetricChange = (event: SelectableValue<MetricType>) => {
    const { onChange, query } = this.props;
    onChange({ ...query, metric: event.value || 'build' });
  };

  onBranchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query } = this.props;
    onChange({ ...query, branch: event.target.value });
  };

  onTestSeriesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query } = this.props;
    onChange({ ...query, testSeriesName: event.target.value });
  };

  onFieldChange = (event: SelectableValue<BuildFieldType | TestFieldType>) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({ ...query, filedValue: event.value || 'status' });
    onRunQuery(); // executes the query
  };

  render() {
    const query = defaults(this.props.query, defaultQuery);
    const { metric, branch, application, owner, filedValue, testSeriesName } = query;
    const { apps } = this.state;

    const appsOptions = apps.length > 0 ? apps : [{ value: undefined, label: 'Select App' }];
    const fieldOptions = metric === 'build' ? BuildFieldOptions : TestFieldOptions;
    const metricOptions = [
      { value: 'build' as MetricType, label: 'Builds' },
      { value: 'testRun' as MetricType, label: 'Test Runs' },
    ];

    return (
      <div className="gf-form">
        <Select
          width={16}
          value={{
            value: {
              displayName: application,
              internalName: application,
              owner: owner,
            } as MobileApplication,
            label: application,
          }}
          options={appsOptions}
          onChange={this.onAppChange}
        />

        <Select
          value={{ value: metric, label: metricOptions.find(x => x.value === metric)!.label }}
          options={metricOptions}
          onChange={this.onMetricChange}
        />
        {metric === 'build' && (
          <FormField
            label={'Target Branch'}
            type={'text'}
            onChange={this.onBranchChange}
            value={branch || 'master'}
            labelWidth={10}
            tooltip="Enter target branch"
          />
        )}
        {metric === 'testRun' && (
          <FormField
            label={'Target Test series'}
            type={'text'}
            onChange={this.onTestSeriesChange}
            value={testSeriesName || 'launch-tests'}
            labelWidth={10}
            tooltip="Enter target test series"
          />
        )}
        <Select width={16} value={{ value: filedValue, label: filedValue }} options={fieldOptions} onChange={this.onFieldChange} />
      </div>
    );
  }
}
