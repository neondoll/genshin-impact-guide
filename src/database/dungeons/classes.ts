import type { IDungeon } from "./types";

export class CDungeon implements IDungeon {
  readonly key: IDungeon["key"];
  readonly name: IDungeon["name"];
  readonly artifact_set_keys: IDungeon["artifact_set_keys"];

  constructor(key: IDungeon["key"], name: IDungeon["name"], artifactSetKeys: IDungeon["artifact_set_keys"]) {
    this.key = key;
    this.name = name;
    this.artifact_set_keys = artifactSetKeys;
  }
}
