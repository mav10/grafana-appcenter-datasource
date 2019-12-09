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
      label: app.internalName,
    }));
    this.setState({ apps: appList });
  }

  onAppChange = (event: SelectableValue<MobileApplication>) => {
    const { onChange, query } = this.props;
    const { value } = event;
    onChange({ ...query, application: value });
  };

  onMetricChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query } = this.props;
    onChange({ ...query, metric: 'build' });
    // onRunQuery(); // executes the query
  };

  onFieldChange = (event: SelectableValue<BuildFieldType | TestFieldType>) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({ ...query, filedValue: event.value || 'status' });
    onRunQuery(); // executes the query
  };

  render() {
    const query = defaults(this.props.query, defaultQuery);
    const { metric } = query;
    const { apps, measureLayer } = this.state;

    const appsOptions = apps.length > 0 ? apps : undefined;
    const fieldOptions = measureLayer === 'app' ? BuildFieldOptions : TestFieldOptions;

    return (
      <div className="gf-form">
        <Select width={16} options={appsOptions} onChange={this.onAppChange} />
        <FormField labelWidth={5} value={metric || 'build'} onChange={this.onMetricChange} label="Metric type" tooltip="Build or test run" />
        <Select width={16} options={fieldOptions} onChange={this.onFieldChange} />
      </div>
    );
  }
}
