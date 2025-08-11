import { TalentKeys, TalentTypeKeys } from "../enums/talent";

type TalentTypeKey = typeof TalentTypeKeys[keyof typeof TalentTypeKeys];

export type Talent = { key: TalentKey; name: string; type_key: TalentTypeKey };
export type TalentKey = typeof TalentKeys[keyof typeof TalentKeys];
