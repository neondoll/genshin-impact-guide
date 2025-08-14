import { ResourceTypeKeys } from "../enums/resource-type";

export interface ResourceType {
  key: ResourceTypeKey;
  name: string;
}

export type ResourceTypeKey = typeof ResourceTypeKeys[keyof typeof ResourceTypeKeys];
