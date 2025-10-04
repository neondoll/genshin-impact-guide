import type { Dungeon as Type } from "@/types/dungeon";

export class Dungeon implements Type {
  readonly id: Type["id"];
  readonly name: Type["name"];
  readonly artifact_set_ids: Type["artifact_set_ids"];

  constructor(id: Type["id"], name: Type["name"], artifactSetIds: Type["artifact_set_ids"]) {
    this.id = id;
    this.name = name;
    this.artifact_set_ids = artifactSetIds;
  }

  static init(params: ConstructorParameters<typeof Dungeon>) {
    return new Dungeon(...params);
  }
}
