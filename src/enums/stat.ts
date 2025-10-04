import { ElementIds } from "./element";

export const StatIds = {
  /* Бонус Анемо урона     */ AnemoDmgBonus: `${ElementIds.Anemo}_dmg_`,
  /* Сила атаки            */ Atk: "atk",
  /* Процент от силы атаки */ AtkPercentage: "atk_",
  /* Крит. урон            */ CritDMG: "critDMG_",
  /* Шанс крит. попадания  */ CritRate: "critRate_",
  /* Бонус Крио урона      */ CryoDmgBonus: `${ElementIds.Cryo}_dmg_`,
  /* Защита                */ Def: "def",
  /* Процент от защиты     */ DefPercentage: "def_",
  /* Бонус Дендро урона    */ DendroDmgBonus: `${ElementIds.Dendro}_dmg_`,
  /* Бонус Электро урона   */ ElectroDmgBonus: `${ElementIds.Electro}_dmg_`,
  /* Мастерство стихий     */ ElementalMastery: "eleMas",
  /* Восст. энергии        */ EnergyRecharge: "enerRech_",
  /* Бонус Гео урона       */ GeoDmgBonus: `${ElementIds.Geo}_dmg_`,
  /* Бонус лечения         */ Heal: "heal_",
  /* HP                    */ Hp: "hp",
  /* Процент от HP         */ HpPercentage: "hp_",
  /* Бонус Гидро урона     */ HydroDmgBonus: `${ElementIds.Hydro}_dmg_`,
  /* Бонус физ. урона      */ PhysicalDmgBonus: "physical_dmg_",
  /* Бонус Пиро урона      */ PyroDmgBonus: `${ElementIds.Pyro}_dmg_`,
} as const;
