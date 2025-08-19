import type { ITalent } from "./types";
import { TalentKeys, TalentTypeKeys } from "./enums";

export class CTalent implements ITalent {
  readonly key: ITalent["key"];
  readonly name: ITalent["name"];
  readonly type_key: ITalent["type_key"];

  constructor(key: keyof typeof TalentKeys, name: ITalent["name"], typeKey: keyof typeof TalentTypeKeys) {
    this.key = TalentKeys[key];
    this.name = name;
    this.type_key = TalentTypeKeys[typeKey];
  }
}
