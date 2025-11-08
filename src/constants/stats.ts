import { ELEMENTS } from "./elements";

export const STATS = {
  // Базовые статы
  HP: "hp",
  HP_PERCENTAGE: "hp_",
  ATK: "atk",
  ATK_PERCENTAGE: "atk_",
  DEF: "def",
  DEF_PERCENTAGE: "def_",

  // Критические статы
  CRIT_RATE: "critRate_",
  CRIT_DMG: "critDMG_",

  // Элементальные статы
  ELEMENTAL_MASTERY: "eleMas",
  ENERGY_RECHARGE: "enerRech_",
  HEALING_BONUS: "heal_",
  PHYSICAL_DMG_BONUS: "physical_dmg_",

  // Бонусы урона по элементам
  ANEMO_DMG_BONUS: `${ELEMENTS.ANEMO}_dmg_`,
  CRYO_DMG_BONUS: `${ELEMENTS.CRYO}_dmg_`,
  DENDRO_DMG_BONUS: `${ELEMENTS.DENDRO}_dmg_`,
  ELECTRO_DMG_BONUS: `${ELEMENTS.ELECTRO}_dmg_`,
  GEO_DMG_BONUS: `${ELEMENTS.GEO}_dmg_`,
  HYDRO_DMG_BONUS: `${ELEMENTS.HYDRO}_dmg_`,
  PYRO_DMG_BONUS: `${ELEMENTS.PYRO}_dmg_`,
} as const;

export type Stat = typeof STATS[keyof typeof STATS];

export const STAT_LABELS: Record<Stat, string> = {
  [STATS.HP]: "HP",
  [STATS.HP_PERCENTAGE]: "HP (%)",
  [STATS.ATK]: "Сила атаки",
  [STATS.ATK_PERCENTAGE]: "Сила атаки (%)",
  [STATS.DEF]: "Защита",
  [STATS.DEF_PERCENTAGE]: "Защита (%)",
  [STATS.CRIT_RATE]: "Шанс крит. попадания",
  [STATS.CRIT_DMG]: "Крит. урон",
  [STATS.ELEMENTAL_MASTERY]: "Мастерство стихий",
  [STATS.ENERGY_RECHARGE]: "Восст. энергии",
  [STATS.HEALING_BONUS]: "Бонус лечения",
  [STATS.PHYSICAL_DMG_BONUS]: "Бонус физ. урона",
  [STATS.ANEMO_DMG_BONUS]: "Бонус Анемо урона",
  [STATS.CRYO_DMG_BONUS]: "Бонус Крио урона",
  [STATS.DENDRO_DMG_BONUS]: "Бонус Дендро урона",
  [STATS.ELECTRO_DMG_BONUS]: "Бонус Электро урона",
  [STATS.GEO_DMG_BONUS]: "Бонус Гео урона",
  [STATS.HYDRO_DMG_BONUS]: "Бонус Гидро урона",
  [STATS.PYRO_DMG_BONUS]: "Бонус Пиро урона",
} as const;

export const STAT_SHORT_LABELS: Record<Stat, string> = {
  [STATS.HP]: "HP",
  [STATS.HP_PERCENTAGE]: "HP%",
  [STATS.ATK]: "ATK",
  [STATS.ATK_PERCENTAGE]: "ATK%",
  [STATS.DEF]: "DEF",
  [STATS.DEF_PERCENTAGE]: "DEF%",
  [STATS.CRIT_RATE]: "CRIT Rate",
  [STATS.CRIT_DMG]: "CRIT DMG",
  [STATS.ELEMENTAL_MASTERY]: "EM",
  [STATS.ENERGY_RECHARGE]: "ER",
  [STATS.HEALING_BONUS]: "Healing",
  [STATS.PHYSICAL_DMG_BONUS]: "Phys DMG",
  [STATS.ANEMO_DMG_BONUS]: "Anemo DMG",
  [STATS.CRYO_DMG_BONUS]: "Cryo DMG",
  [STATS.DENDRO_DMG_BONUS]: "Dendro DMG",
  [STATS.ELECTRO_DMG_BONUS]: "Electro DMG",
  [STATS.GEO_DMG_BONUS]: "Geo DMG",
  [STATS.HYDRO_DMG_BONUS]: "Hydro DMG",
  [STATS.PYRO_DMG_BONUS]: "Pyro DMG",
} as const;

// Группировка статов
export const MAIN_STATS = [
  STATS.HP_PERCENTAGE,
  STATS.ATK_PERCENTAGE,
  STATS.DEF_PERCENTAGE,
  STATS.ELEMENTAL_MASTERY,
  STATS.ENERGY_RECHARGE,
  STATS.CRIT_RATE,
  STATS.CRIT_DMG,
  STATS.HEALING_BONUS,
  STATS.PHYSICAL_DMG_BONUS,
  STATS.ANEMO_DMG_BONUS,
  STATS.CRYO_DMG_BONUS,
  STATS.DENDRO_DMG_BONUS,
  STATS.ELECTRO_DMG_BONUS,
  STATS.GEO_DMG_BONUS,
  STATS.HYDRO_DMG_BONUS,
  STATS.PYRO_DMG_BONUS,
] as const;

export const SUB_STATS = [
  STATS.HP,
  STATS.HP_PERCENTAGE,
  STATS.ATK,
  STATS.ATK_PERCENTAGE,
  STATS.DEF,
  STATS.DEF_PERCENTAGE,
  STATS.CRIT_RATE,
  STATS.CRIT_DMG,
  STATS.ELEMENTAL_MASTERY,
  STATS.ENERGY_RECHARGE,
] as const;

export const FLAT_STATS = [
  STATS.HP,
  STATS.ATK,
  STATS.DEF,
] as const;

export const PERCENTAGE_STATS = [
  STATS.HP_PERCENTAGE,
  STATS.ATK_PERCENTAGE,
  STATS.DEF_PERCENTAGE,
  STATS.CRIT_RATE,
  STATS.CRIT_DMG,
  STATS.ENERGY_RECHARGE,
  STATS.HEALING_BONUS,
  STATS.PHYSICAL_DMG_BONUS,
  STATS.ANEMO_DMG_BONUS,
  STATS.CRYO_DMG_BONUS,
  STATS.DENDRO_DMG_BONUS,
  STATS.ELECTRO_DMG_BONUS,
  STATS.GEO_DMG_BONUS,
  STATS.HYDRO_DMG_BONUS,
  STATS.PYRO_DMG_BONUS,
] as const;

// Утилиты для работы со статами
export const isValidStat = (stat: string): stat is Stat => {
  return Object.values(STATS).includes(stat as Stat);
};

export const isMainStat = (stat: Stat): boolean => {
  return MAIN_STATS.includes(stat as any);
};

export const isSubStat = (stat: Stat): boolean => {
  return SUB_STATS.includes(stat as any);
};

export const isFlatStat = (stat: Stat): boolean => {
  return FLAT_STATS.includes(stat as any);
};

export const isPercentageStat = (stat: Stat): boolean => {
  return PERCENTAGE_STATS.includes(stat as any);
};

export const isElementalDmgBonus = (stat: Stat): boolean => {
  return [
    STATS.ANEMO_DMG_BONUS,
    STATS.CRYO_DMG_BONUS,
    STATS.DENDRO_DMG_BONUS,
    STATS.ELECTRO_DMG_BONUS,
    STATS.GEO_DMG_BONUS,
    STATS.HYDRO_DMG_BONUS,
    STATS.PYRO_DMG_BONUS,
  ].includes(stat as any);
};

export const getElementFromDmgBonus = (stat: Stat): string | null => {
  const elementMap: Record<string, string> = {
    [STATS.ANEMO_DMG_BONUS]: ELEMENTS.ANEMO,
    [STATS.CRYO_DMG_BONUS]: ELEMENTS.CRYO,
    [STATS.DENDRO_DMG_BONUS]: ELEMENTS.DENDRO,
    [STATS.ELECTRO_DMG_BONUS]: ELEMENTS.ELECTRO,
    [STATS.GEO_DMG_BONUS]: ELEMENTS.GEO,
    [STATS.HYDRO_DMG_BONUS]: ELEMENTS.HYDRO,
    [STATS.PYRO_DMG_BONUS]: ELEMENTS.PYRO,
  };

  return elementMap[stat] || null;
};
