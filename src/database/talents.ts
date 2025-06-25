type Talent = { name: string };
type Talents = Record<TalentUid, Talent>;

export const TalentUidEnum = {
  ElementalBurst: "Elemental Burst",
  ElementalSkill: "Elemental Skill",
  NormalAttack: "Normal Attack",
} as const;

export type TalentUid = typeof TalentUidEnum[keyof typeof TalentUidEnum];

const talents = {
  [TalentUidEnum.NormalAttack]: { name: "Обычная атака" },
  [TalentUidEnum.ElementalSkill]: { name: "Элементальный навык" },
  [TalentUidEnum.ElementalBurst]: { name: "Взрыв стихии" },
} as Talents;

export async function getTalents() {
  return talents;
}
