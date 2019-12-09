import { DataQuery, DataSourceJsonData } from '@grafana/data';

export interface MyQuery extends DataQuery {
  application?: MobileApplication;
  owner: string;
  metric: MetricType;
  filedValue: BuildFieldType | TestFieldType;
}

export const defaultQuery: Partial<MyQuery> = {
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

export type BuildFieldType = 'id' | 'lastTime' | 'status' | 'name' | 'version';
/**
 * sShould contain all @see { BuildFieldType } types
 */
export const BuildFieldOptions = [
  { value: 'id' as BuildFieldType, label: 'ID' },
  { value: 'status' as BuildFieldType, label: 'Status' },
  { value: 'version' as BuildFieldType, label: 'Version' },
  { value: 'lastTime' as BuildFieldType, label: 'Last Time' },
  { value: 'name' as BuildFieldType, label: 'Application Name' },
];

export type TestFieldType = 'id' | 'lastTime' | 'status' | 'name' | 'image';
/**
 * sShould contain all @see { BuildFieldType } types
 */
export const TestFieldOptions = [
  { value: 'id' as TestFieldType, label: 'ID' },
  { value: 'lastTime' as TestFieldType, label: 'Execution time' },
  { value: 'status' as TestFieldType, label: 'Status' },
  { value: 'image' as TestFieldType, label: 'Screenshot' },
  { value: 'name' as TestFieldType, label: 'Test run Name' },
];

export interface MobileApplication {
  id: string;
  internalName: string;
  displayName: string;
  owner: string;
}

export interface BuildInfo {
  id: string;
  version: string;
  status: string;
  date: string;
  branch: string;
}

export interface RequestOptions {
  url: string;
  method: string;
  headers: Headers;
}

interface Headers {
  [name: string]: string;
}
