import { ElementKeys } from "./element";

export const StatKeys = {
  /* Бонус Анемо урона     */ AnemoDmgBonus: `${ElementKeys["🌪️"]}_dmg_`,
  /* Сила атаки            */ Atk: "atk",
  /* Процент от силы атаки */ AtkPercentage: "atk_",
  /* Крит. урон            */ CritDMG: "critDMG_",
  /* Шанс крит. попадания  */ CritRate: "critRate_",
  /* Бонус Крио урона      */ CryoDmgBonus: `${ElementKeys["❄️"]}_dmg_`,
  /* Защита                */ Def: "def",
  /* Процент от защиты     */ DefPercentage: "def_",
  /* Бонус Дендро урона    */ DendroDmgBonus: `${ElementKeys["🌿"]}_dmg_`,
  /* Бонус Электро урона   */ ElectroDmgBonus: `${ElementKeys["⚡️"]}_dmg_`,
  /* Мастерство стихий     */ ElementalMastery: "eleMas",
  /* Восст. энергии        */ EnergyRecharge: "enerRech_",
  /* Бонус Гео урона       */ GeoDmgBonus: `${ElementKeys["🏔️"]}_dmg_`,
  /* Бонус лечения         */ Heal: "heal_",
  /* HP                    */ Hp: "hp",
  /* Процент от HP         */ HpPercentage: "hp_",
  /* Бонус Гидро урона     */ HydroDmgBonus: `${ElementKeys["💧"]}_dmg_`,
  /* Бонус физ. урона      */ PhysicalDmgBonus: "physical_dmg_",
  /* Бонус Пиро урона      */ PyroDmgBonus: `${ElementKeys["🔥"]}_dmg_`,
} as const;
