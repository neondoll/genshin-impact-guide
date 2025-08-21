import type { IStat } from "./types";

export class CStat implements IStat {
  readonly key: IStat["key"];
  readonly name: IStat["name"];
  readonly abbr: IStat["abbr"];

  constructor(key: IStat["key"], name: IStat["name"], abbr: IStat["abbr"] = undefined) {
    this.key = key;
    this.name = name;
    this.abbr = abbr;
  }

  static init(params: ConstructorParameters<typeof CStat>) {
    return new CStat(...params);
  }
}
