/**
* Generated code, DO NOT modify directly.
* Instead update the openapi in custom-policies-ui-backend and run in custom-policies-ui-frontend
*   `yarn generate-schema` to re-generate this file.
* Note: As the time of writing, the schema is taken from:
*   http://localhost:8080/api/custom-policies/v1.0/openapi.json
*/
export enum FactType {
  BOOLEAN = 'BOOLEAN',
  INT = 'INT',
  LIST = 'LIST',
  STRING = 'STRING',
}

export interface Fact {
  id?: number;
  name?: string;
  type?: FactType;
}

export type Uuid = string;

export interface Policy {
  actions?: string;
  conditions: string;
  description?: string;
  id?: Uuid;
  isEnabled?: boolean;
  mtime?: string;
  name: string;
}

export type ListPolicy = Array<Policy>;

export interface MapStringString {
  [key: string]: string;
}

export interface MapStringLong {
  [key: string]: number;
}

export interface PagedResponse {
  data?: ListPolicy;
  links?: MapStringString;
  meta?: MapStringLong;
}

export interface SettingsValues {
  dailyEmail?: boolean;
  immediateEmail?: boolean;
}

