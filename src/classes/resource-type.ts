import type { ResourceType as Type } from "@/types/resource-type";

export class ResourceType implements Type {
  readonly id: Type["id"];
  readonly name: Type["name"];

  constructor(id: Type["id"], name: Type["name"]) {
    this.id = id;
    this.name = name;
  }

  static init(params: ConstructorParameters<typeof ResourceType>) {
    return new ResourceType(...params);
  }
}
