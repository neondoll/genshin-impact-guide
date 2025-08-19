import type { IStat } from "./types";
import { StatKeys } from "./enums";

export class CStat implements IStat {
  readonly key: IStat["key"];
  readonly name: IStat["name"];
  readonly abbr: IStat["abbr"];

  constructor(key: keyof typeof StatKeys, name: IStat["name"], abbr: IStat["abbr"] = undefined) {
    this.key = StatKeys[key];
    this.name = name;
    this.abbr = abbr;
  }
}
