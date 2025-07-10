import { TalentTypeUidEnum, TalentUidEnum } from "../enums/talent";

type TalentTypeUid = typeof TalentTypeUidEnum[keyof typeof TalentTypeUidEnum];

export type Talent = { uid: TalentUid; name: string; type_uid: TalentTypeUid };
export type TalentUid = typeof TalentUidEnum[keyof typeof TalentUidEnum];
