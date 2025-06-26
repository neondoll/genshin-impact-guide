type Talent = { name: string };
type Talents = Record<TalentUid, Talent>;

export const TalentUidEnum = {
  /* Взрыв стихии        */ ElementalBurst: "elemental_burst",
  /* Элементальный навык */ ElementalSkill: "elemental_skill",
  /* Обычная атака       */ NormalAttack: "normal_attack",
} as const;

export type TalentUid = typeof TalentUidEnum[keyof typeof TalentUidEnum];

const talents = {
  [TalentUidEnum.NormalAttack]: { name: "Обычная атака" },
  [TalentUidEnum.ElementalSkill]: { name: "Элементальный навык" },
  [TalentUidEnum.ElementalBurst]: { name: "Взрыв стихии" },
} as Talents;

export async function getTalents() {
  console.log("getTalents");

  return talents;
}
