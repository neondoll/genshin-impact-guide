import type { IResourceType } from "./types";
import { ResourceTypeKeys } from "./enums";

export class CResourceType implements IResourceType {
  readonly key: IResourceType["key"];
  readonly name: IResourceType["name"];

  constructor(key: keyof typeof ResourceTypeKeys, name: IResourceType["name"]) {
    this.key = ResourceTypeKeys[key];
    this.name = name;
  }
}
