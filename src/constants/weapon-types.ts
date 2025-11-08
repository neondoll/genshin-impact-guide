export const WEAPON_TYPES = {
  BOW: "bow",
  CATALYST: "catalyst",
  CLAYMORE: "claymore",
  POLEARM: "polearm",
  SWORD: "sword",
} as const;

export type WeaponType = typeof WEAPON_TYPES[keyof typeof WEAPON_TYPES];

export const WEAPON_TYPE_LABELS: Record<WeaponType, string> = {
  [WEAPON_TYPES.BOW]: "Стрелковое оружие",
  [WEAPON_TYPES.CATALYST]: "Катализатор",
  [WEAPON_TYPES.CLAYMORE]: "Двуручное оружие",
  [WEAPON_TYPES.POLEARM]: "Древковое оружие",
  [WEAPON_TYPES.SWORD]: "Одноручное оружие",
} as const;

export const WEAPON_TYPE_ICONS: Record<WeaponType, string> = {
  [WEAPON_TYPES.BOW]: "🏹",
  [WEAPON_TYPES.CATALYST]: "📖",
  [WEAPON_TYPES.CLAYMORE]: "⚔️",
  [WEAPON_TYPES.POLEARM]: "🔱",
  [WEAPON_TYPES.SWORD]: "🗡️",
} as const;

export const WEAPON_TYPE_DESCRIPTIONS: Record<WeaponType, string> = {
  [WEAPON_TYPES.BOW]: "Дальнобойное оружие для точных выстрелов",
  [WEAPON_TYPES.CATALYST]: "Магический инструмент для усиления элементальных атак",
  [WEAPON_TYPES.CLAYMORE]: "Мощное тяжелое оружие для сокрушительных ударов",
  [WEAPON_TYPES.POLEARM]: "Длинное оружие для быстрых и дальних атак",
  [WEAPON_TYPES.SWORD]: "Универсальное оружие для сбалансированного боя",
} as const;

// Группировка типов оружия
export const MELEE_WEAPONS = [
  WEAPON_TYPES.SWORD,
  WEAPON_TYPES.CLAYMORE,
  WEAPON_TYPES.POLEARM,
] as const;

export const RANGED_WEAPONS = [
  WEAPON_TYPES.BOW,
  WEAPON_TYPES.CATALYST,
] as const;

export const HEAVY_WEAPONS = [
  WEAPON_TYPES.CLAYMORE,
] as const;

export const LIGHT_WEAPONS = [
  WEAPON_TYPES.SWORD,
  WEAPON_TYPES.POLEARM,
  WEAPON_TYPES.BOW,
  WEAPON_TYPES.CATALYST,
] as const;

// Характеристики типов оружия
export const WEAPON_TYPE_STATS = {
  [WEAPON_TYPES.BOW]: { attackSpeed: "fast", range: "long" },
  [WEAPON_TYPES.CATALYST]: { attackSpeed: "medium", range: "medium" },
  [WEAPON_TYPES.CLAYMORE]: { attackSpeed: "slow", range: "short" },
  [WEAPON_TYPES.POLEARM]: { attackSpeed: "fast", range: "medium" },
  [WEAPON_TYPES.SWORD]: { attackSpeed: "medium", range: "short" },
} as const;

// Валидация и утилиты
export const isValidWeaponType = (weaponType: string): weaponType is WeaponType => {
  return Object.values(WEAPON_TYPES).includes(weaponType as WeaponType);
};

export const isMeleeWeapon = (weaponType: WeaponType): boolean => {
  return MELEE_WEAPONS.includes(weaponType as any);
};

export const isRangedWeapon = (weaponType: WeaponType): boolean => {
  return RANGED_WEAPONS.includes(weaponType as any);
};

export const getWeaponTypeLabel = (weaponType: WeaponType): string => {
  return WEAPON_TYPE_LABELS[weaponType];
};

// Порядок отображения
export const WEAPON_TYPE_ORDER: WeaponType[] = [
  WEAPON_TYPES.SWORD,
  WEAPON_TYPES.CLAYMORE,
  WEAPON_TYPES.POLEARM,
  WEAPON_TYPES.BOW,
  WEAPON_TYPES.CATALYST,
];
