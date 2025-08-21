import type { IResourceType } from "./types";

export class CResourceType implements IResourceType {
  readonly key: IResourceType["key"];
  readonly name: IResourceType["name"];

  constructor(key: IResourceType["key"], name: IResourceType["name"]) {
    this.key = key;
    this.name = name;
  }

  static init(params: ConstructorParameters<typeof CResourceType>) {
    return new CResourceType(...params);
  }
}
