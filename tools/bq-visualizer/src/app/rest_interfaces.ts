/** The interface to the return of the API call list jobs in BQ */

export interface QueryStep {
  kind: string;
  substeps: string[];
}

export interface QueryStage {
  completedParallelInputs: string;
  computeMsAvg: string;
  computeMsMax: string;
  computeRatioAvg: number;
  computeRatioMax: number;
  endMs?: string;
  inputStages?: string[];
  id: string;
  name: string;
  parallelInputs: string;
  readMsAvg: string;
  readMsMax: string;
  readRatioAvg: number;
  readRatioMax: number;
  recordsRead: string;
  recordsWritten: string;
  shuffleOutputBytes: string;
  shuffleOutputBytesSpilled: string;
  startMs?: string;
  status: string;
  isExternal?: boolean;
  steps: QueryStep[];
  writeRatioAvg: string;
  writeMsAvg: string;
  writeMsMax: string;
  writeRatioMax: string;
  waitRatioAvg: string;
  waitMsAvg: string;
  waitRatioMax: string;
  waitMsMax: string;
}

interface Status {
  state: string;
}

interface ReferencedTables {
  datasetId: string;
  projectId: string;
  tableId: string;
}

interface Timeline {
  activeUnits: string;
  completedUnits: string;
  elapsedMs: string;
  pendingUnits: string;
  totalSlotMs: string;
}

interface Query {
  billingTier: number;
  cacheHit: boolean;
  referencedTables: ReferencedTables[];
  statementType: string;
  totalBytesBilled: number;
  totalBytesProcessed: number;
  totalPartitionsProcessed: number;
  estimatedBytesProcessed: string;
  useQueryCache?: string;
  queryPlan?: QueryStage[];
  timeline: Timeline;
}

interface Statistics {
  creationTime: string;
  endTime: string;
  startTime: string;
  totalBytesProcessed: string;
  query?: Query;
}

interface JobReference {
  jobId: string;
  location: string;
  projectId: string;
}

interface DestinationTable {
  datasetId: string;
  projectId: string;
  tableId: string;
}

interface ConfigurationQuery {
  createDisposition: string;
  destinationTable: DestinationTable;
  priority: string;
  query: string;
  useLegacySql: boolean;
  writeDisposition: string;
  useQueryCache?: boolean;
}

interface Configuration {
  query?: ConfigurationQuery;
}

interface ErrorResult {
  reason: string;
  location: string;
  debugInfo: string;
  message: string;
}

export interface Job {
  id: string;
  etag: string;
  jobReference: JobReference;
  kind: string;
  state: string;
  status: Status;
  errorResult?: ErrorResult;
  statistics: Statistics;
  configuration?: Configuration;
}

export interface BqListJobResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  jobs: Job[];
}

enum LifeCycleState {
  LIFECYCLE_STATE_UNSPECIFIED,
  ACTIVE,
  DELETE_REQUESTED,
  DELETE_IN_PROGRESS
}

export interface Project {
  projectNumber: string;
  projectId: string;
  lifecycleState: LifeCycleState;
  name: string;
  labels: any;
  parent?: Object;
}

export interface GcpProjectListResponse {
  projects: Project[];
  nextPageToken?: string;
}

interface BqProjectReference {
  projectId: string;
}

export interface BqProject {
  kind: string;
  id: string;
  numericId: number;
  projectReference: BqProjectReference;
  friendlyName: string;
}

export interface BqProjectListResponse {
  kind: string;
  etag: string;
  nextPageToken?: string;
  projects: BqProject[];
  totalItems: number;
}
