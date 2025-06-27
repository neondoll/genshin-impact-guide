type Attribute = { name: string };
type Attributes = Record<AttributeUid, Attribute>;

export type AttributeUid = typeof AttributeUidEnum[keyof typeof AttributeUidEnum];

export const AttributeUidEnum = {
  /* Бонус Анемо урона     */ AnemoDamageBonus: "anemo_damage_bonus",
  /* Сила атаки            */ AttackPower: "attack_power",
  /* Крит. урон            */ CriticalDamage: "critical_damage",
  /* Шанс крит. попадания  */ CriticalHitChance: "critical_hit_chance",
  /* Бонус Крио урона      */ CryoDamageBonus: "cryo_damage_bonus",
  /* Бонус Дендро урона    */ DendroDamageBonus: "dendro_damage_bonus",
  /* Бонус Электро урона   */ ElectroDamageBonus: "electro_damage_bonus",
  /* Восст. энергии        */ EnergyRestoration: "energy_restoration",
  /* Бонус Гео урона       */ GeoDamageBonus: "geo_damage_bonus",
  /* HP                    */ HP: "hp",
  /* Бонус Гидро урона     */ HydroDamageBonus: "hydro_damage_bonus",
  /* Мастерство стихий     */ MasteryOfElements: "mastery_of_elements",
  /* Процент от силы атаки */ PercentageOfAttackPower: "percentage_of_attack_power",
  /* Процент от HP         */ PercentageOfHP: "percentage_of_hp",
  /* Процент от защиты     */ PercentageOfProtection: "percentage_of_protection",
  /* Бонус физ. урона      */ PhysicalDamageBonus: "physical_damage_bonus",
  /* Защита                */ Protection: "protection",
  /* Бонус Пиро урона      */ PyroDamageBonus: "pyro_damage_bonus",
  /* Бонус лечения         */ TreatmentBonus: "treatment_bonus",
} as const;

const attributes = {
  [AttributeUidEnum.HP]: { name: "HP" },
  [AttributeUidEnum.PercentageOfHP]: { name: "Процент от HP" },
  [AttributeUidEnum.AttackPower]: { name: "Сила атаки" },
  [AttributeUidEnum.PercentageOfAttackPower]: { name: "Процент от силы атаки" },
  [AttributeUidEnum.Protection]: { name: "Защита" },
  [AttributeUidEnum.PercentageOfProtection]: { name: "Процент от защиты" },
  [AttributeUidEnum.CriticalHitChance]: { name: "Шанс крит. попадания" },
  [AttributeUidEnum.CriticalDamage]: { name: "Крит. урон" },
  [AttributeUidEnum.MasteryOfElements]: { name: "Мастерство стихий" },
  [AttributeUidEnum.EnergyRestoration]: { name: "Восст. энергии" },
  [AttributeUidEnum.PhysicalDamageBonus]: { name: "Бонус физ. урона" },
  [AttributeUidEnum.PyroDamageBonus]: { name: "Бонус Пиро урона" },
  [AttributeUidEnum.ElectroDamageBonus]: { name: "Бонус Электро урона" },
  [AttributeUidEnum.HydroDamageBonus]: { name: "Бонус Гидро урона" },
  [AttributeUidEnum.DendroDamageBonus]: { name: "Бонус Дендро урона" },
  [AttributeUidEnum.AnemoDamageBonus]: { name: "Бонус Анемо урона" },
  [AttributeUidEnum.GeoDamageBonus]: { name: "Бонус Гео урона" },
  [AttributeUidEnum.CryoDamageBonus]: { name: "Бонус Крио урона" },
  [AttributeUidEnum.TreatmentBonus]: { name: "Бонус лечения" },
} as Attributes;

export function getAttributes() {
  console.log("getAttributes");

  return attributes;
}
