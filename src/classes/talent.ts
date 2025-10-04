import type { Talent as Type } from "@/types/talent";

export class Talent implements Type {
  readonly id: Type["id"];
  readonly name: Type["name"];
  readonly type_id: Type["type_id"];

  constructor(id: Type["id"], name: Type["name"], typeId: Type["type_id"]) {
    this.id = id;
    this.name = name;
    this.type_id = typeId;
  }

  static init(params: ConstructorParameters<typeof Talent>) {
    return new Talent(...params);
  }
}
