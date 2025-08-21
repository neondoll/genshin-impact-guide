import type { ITalent } from "./types";

export class CTalent implements ITalent {
  readonly key: ITalent["key"];
  readonly name: ITalent["name"];
  readonly type_key: ITalent["type_key"];

  constructor(key: ITalent["key"], name: ITalent["name"], typeKey: ITalent["type_key"]) {
    this.key = key;
    this.name = name;
    this.type_key = typeKey;
  }

  static init(params: ConstructorParameters<typeof CTalent>) {
    return new CTalent(...params);
  }
}
