import { ResourceTypeKeys } from "./enums";

export interface IResourceType {
  key: TResourceTypeKey;
  name: string;
}

export type TResourceTypeKey = typeof ResourceTypeKeys[keyof typeof ResourceTypeKeys];
