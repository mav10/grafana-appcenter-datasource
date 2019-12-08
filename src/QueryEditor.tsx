import defaults from 'lodash/defaults';

import React, { PureComponent, ChangeEvent } from 'react';
import { FormField } from '@grafana/ui';
import { QueryEditorProps } from '@grafana/data';
import { DataSource } from './DataSource';
import { MyQuery, DataSourceOptions, defaultQuery, MobileApplication } from './types';

type Props = QueryEditorProps<DataSource, MyQuery, DataSourceOptions>;

interface State {
  apps: string[];
}

export class QueryEditor extends PureComponent<Props, State> {
  async onComponentDidMount() {
    const appsFromDS = await this.props.datasource.getAppList();
    const items: string[] = appsFromDS.map((app: MobileApplication) => app.name);
    this.setState({ apps: items });
  }

  onAppChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query } = this.props;
    onChange({ ...query, application: event.target.value || 'ios' });
  };

  onMetricChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({ ...query, metric: 'build' });
    onRunQuery(); // executes the query
  };

  onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({ ...query, filedValue: 'status' });
    onRunQuery(); // executes the query
  };

  render() {
    const query = defaults(this.props.query, defaultQuery);
    console.log('query in query:', query);
    const { application, metric, filedValue } = query;
    return (
      <div className="gf-form">
        <FormField labelWidth={8} value={application || 'ios'} onChange={this.onAppChange} label="Application" type={'select'} />
        <FormField labelWidth={8} value={metric || 'build'} onChange={this.onMetricChange} label="Metric type" tooltip="Build or test run" />
        <FormField width={6} value={filedValue || 'status'} onChange={this.onFieldChange} label="Metric value" type="text" />
      </div>
    );
  }
}
