import { DataQuery, DataSourceJsonData } from '@grafana/data';

export interface MyQuery extends DataQuery {
  application: string;
  owner: string;
  metric: MetricType;
  filedValue: BuildFieldType | TestFieldType;
  branch: string;
}

export const defaultQuery: Partial<MyQuery> = {
  metric: 'build',
  filedValue: 'status',
  branch: 'master',
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

export type BuildFieldType = 'id' | 'date' | 'status' | 'version';
/**
 * sShould contain all @see { BuildFieldType } types
 */
export const BuildFieldOptions = [
  { value: 'id' as BuildFieldType, label: 'ID' },
  { value: 'status' as BuildFieldType, label: 'Status' },
  { value: 'version' as BuildFieldType, label: 'Version' },
  { value: 'date' as BuildFieldType, label: 'Last Time' },
  { value: 'name' as BuildFieldType, label: 'Application Name' },
];

export type TestFieldType = 'id' | 'date' | 'status' | 'image';
/**
 * sShould contain all @see { BuildFieldType } types
 */
export const TestFieldOptions = [
  { value: 'id' as TestFieldType, label: 'ID' },
  { value: 'date' as TestFieldType, label: 'Execution time' },
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

export interface BranchWithBuild {
  branch: string;
  buildInfo: RawBuildInfo;
}

export interface RawBuildInfo {
  buildNumber: string;
  finishTime: string;
  id: number;
  lastChangedDate: string;
  queueTime: string;
  reason: string;
  result: string | 'succeeded';
  sourceBranch: string;
  startTime: string;
  status: string | 'completed' | 'inProgress';
}

export interface BuildInfo {
  id: number;
  version: string;
  status: string;
  date: string;
}

export interface RequestOptions {
  url: string;
  method: string;
  headers: Headers;
}

interface Headers {
  [name: string]: string;
}

export const BuildStates: any = {
  SUCCESS: 100,
  PENDING_AND_SUCCESS: 65,
  PENDING: 50,
  PENDING_AND_FAILED: 35,
  QUEUED: 25,
  FAILED: 0,
};
