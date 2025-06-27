type Talent = { name: string };
type Talents = Record<TalentUid, Talent>;

export type TalentUid = typeof TalentUidEnum[keyof typeof TalentUidEnum];

export const TalentUidEnum = {
  /* Взрыв стихии        */ ElementalBurst: "elemental_burst",
  /* Элементальный навык */ ElementalSkill: "elemental_skill",
  /* Обычная атака       */ NormalAttack: "normal_attack",
} as const;

const talents = {
  [TalentUidEnum.NormalAttack]: { name: "Обычная атака" },
  [TalentUidEnum.ElementalSkill]: { name: "Элементальный навык" },
  [TalentUidEnum.ElementalBurst]: { name: "Взрыв стихии" },
} as Talents;

export function getTalents() {
  return talents;
}
