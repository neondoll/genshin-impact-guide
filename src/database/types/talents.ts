import type { TalentUidEnum } from "../enums/talents";

type Talent = { name: string };

export type Talents = Record<TalentUid, Talent>;
export type TalentUid = typeof TalentUidEnum[keyof typeof TalentUidEnum];
