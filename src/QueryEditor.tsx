import defaults from 'lodash/defaults';

import React, { PureComponent, ChangeEvent } from 'react';
import { FormField, Select } from '@grafana/ui';
import { QueryEditorProps, SelectableValue } from '@grafana/data';
import { DataSource } from './DataSource';
import { MyQuery, DataSourceOptions, defaultQuery, MobileApplication, FieldType } from './types';

type Props = QueryEditorProps<DataSource, MyQuery, DataSourceOptions>;

interface State {
  apps: Array<SelectableValue<string>>;
}

export class QueryEditor extends PureComponent<Props, State> {
  state = {
    apps: [],
  };

  async onComponentDidMount() {
    const appsFromDS = await this.props.datasource.getAppList();
    const items: Array<SelectableValue<string>> = appsFromDS.map((app: MobileApplication) => ({ value: app.name, key: app.id }));
    console.log(items, appsFromDS);
    this.setState({ apps: items });
  }

  async getOptions() {
    const appsFromDS = await this.props.datasource.getAppList();
    const item: SelectableValue<string> = appsFromDS.map((app: MobileApplication) => app.name);
    console.log(item, appsFromDS);
    return item;
  }

  onAppChange = (event: SelectableValue<string>) => {
    const { onChange, query } = this.props;
    onChange({ ...query, application: event.value || 'ios' });
  };

  onMetricChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({ ...query, metric: 'build' });
    onRunQuery(); // executes the query
  };

  onFieldChange = (event: SelectableValue<FieldType>) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({ ...query, filedValue: event.value || 'status' });
    onRunQuery(); // executes the query
  };

  render() {
    const query = defaults(this.props.query, defaultQuery);
    console.log('query in query:', this);
    const { metric } = query;

    return (
      <div className="gf-form">
        <Select
          width={8}
          options={[
            { value: 'ios', label: 'iOS' },
            { value: 'android', label: 'Android' },
          ]}
          onChange={this.onAppChange}
        />
        <FormField labelWidth={8} value={metric || 'build'} onChange={this.onMetricChange} label="Metric type" tooltip="Build or test run" />
        <Select
          width={8}
          options={[
            { value: 'id', label: 'ID' },
            { value: 'status', label: 'Status' },
            { value: 'version', label: 'Version' },
          ]}
          onChange={this.onFieldChange}
        />
      </div>
    );
  }
}
