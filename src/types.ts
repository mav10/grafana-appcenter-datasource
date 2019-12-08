import { DataQuery, DataSourceJsonData } from '@grafana/data';

export interface MyQuery extends DataQuery {
  application: string;
  metric: MetricType;
  filedValue: FieldType;
}

export const defaultQuery: Partial<MyQuery> = {
  application: 'ios',
  metric: 'build',
  filedValue: 'status',
};

/**
 * These are options configured for each DataSource instance
 */
export interface DataSourceOptions extends DataSourceJsonData {
  path?: string;
}

/**
 * Value that is used in the backend, but never sent over HTTP to the frontend
 */
export interface MySecureJsonData {
  apiKey?: string;
}

export type MetricType = 'build' | 'testRun';
export type FieldType = 'id' | 'lastTime' | 'status' | 'name' | 'version';

export interface MobileApplication {
  id: string;
  name: string;
}

export interface RequestOptions {
  url: string;
  method: string;
  headers: Headers;
}

interface Headers {
  [name: string]: string;
}
