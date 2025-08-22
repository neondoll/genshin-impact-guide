import type { IDungeon } from "./types";

export class CDungeon implements IDungeon {
  readonly key: IDungeon["key"];
  readonly name: IDungeon["name"];
  readonly artifact_set_ids: IDungeon["artifact_set_ids"];

  constructor(key: IDungeon["key"], name: IDungeon["name"], artifactSetIds: IDungeon["artifact_set_ids"]) {
    this.key = key;
    this.name = name;
    this.artifact_set_ids = artifactSetIds;
  }

  static init(params: ConstructorParameters<typeof CDungeon>) {
    return new CDungeon(...params);
  }
}
