import { TalentKeys, TalentTypeKeys } from "./enums";

type TTalentTypeKey = typeof TalentTypeKeys[keyof typeof TalentTypeKeys];

export interface ITalent {
  key: TTalentKey;
  name: string;
  type_key: TTalentTypeKey;
}

export type TTalentKey = typeof TalentKeys[keyof typeof TalentKeys];
