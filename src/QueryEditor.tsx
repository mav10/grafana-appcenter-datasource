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
  MobileApplication,
  MyQuery,
  TestFieldOptions,
  TestFieldType,
} from './types';

type Props = QueryEditorProps<DataSource, MyQuery, DataSourceOptions>;

interface State {
  apps: Array<SelectableValue<MobileApplication>>;
  measureLayer: 'app' | 'test';
}

export class QueryEditor extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      apps: [],
      measureLayer: 'app',
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
      onChange({ ...query, application: application.internalName, owner: application.owner });
    } else {
      throw new Error('Application is not chosen! Please select target app from the first column of query.');
    }
  };

  onMetricChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query } = this.props;
    onChange({ ...query, metric: 'build' });
  };

  onBranchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query } = this.props;
    onChange({ ...query, branch: event.target.value });
  };

  onFieldChange = (event: SelectableValue<BuildFieldType | TestFieldType>) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({ ...query, filedValue: event.value || 'status' });
    onRunQuery(); // executes the query
  };

  render() {
    const query = defaults(this.props.query, defaultQuery);
    const { metric, branch, application, owner, filedValue } = query;
    const { apps, measureLayer } = this.state;

    const appsOptions = apps.length > 0 ? apps : [{ value: undefined, label: 'Select App' }];
    const fieldOptions = measureLayer === 'app' ? BuildFieldOptions : TestFieldOptions;

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
        <FormField
          label={'Target Branch'}
          type={'text'}
          onChange={this.onBranchChange}
          value={branch || 'master'}
          labelWidth={5}
          tooltip="Enter target branch"
        />
        <FormField labelWidth={6} value={metric || 'build'} onChange={this.onMetricChange} label="Metric type" tooltip="Build or test run" />
        <Select width={16} value={{ value: filedValue, label: filedValue }} options={fieldOptions} onChange={this.onFieldChange} />
      </div>
    );
  }
}
