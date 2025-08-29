import { TalentIds, TalentTypeIds } from "./enums";

type TalentTypeId = typeof TalentTypeIds[keyof typeof TalentTypeIds];

export interface Talent {
  id: TalentId;
  name: string;
  type_id: TalentTypeId;
}

export type TalentId = typeof TalentIds[keyof typeof TalentIds];
