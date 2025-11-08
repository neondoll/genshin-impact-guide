import type { WEAPON_TYPES } from "../weapon-types";
import {
  FIVE_STAR_WEAPON_LABELS,
  FIVE_STAR_WEAPON_TYPE_MAP,
  FIVE_STAR_WEAPONS,
  type FiveStarWeaponId,
} from "./five-star";
import {
  FOUR_STAR_WEAPON_LABELS,
  FOUR_STAR_WEAPON_TYPE_MAP,
  FOUR_STAR_WEAPONS,
  type FourStarWeaponId,
} from "./four-star";

export { FIVE_STAR_WEAPONS, FOUR_STAR_WEAPONS };

export const WEAPONS = {
  ...FIVE_STAR_WEAPONS,
  ...FOUR_STAR_WEAPONS,
} as const;

export type WeaponId = FiveStarWeaponId | FourStarWeaponId;

export const WEAPON_LABELS: Record<WeaponId, string> = {
  ...FIVE_STAR_WEAPON_LABELS,
  ...FOUR_STAR_WEAPON_LABELS,
} as const;

export const WEAPON_TYPE_MAP: Partial<Record<WeaponId, typeof WEAPON_TYPES[keyof typeof WEAPON_TYPES]>> = {
  ...FIVE_STAR_WEAPON_TYPE_MAP,
  ...FOUR_STAR_WEAPON_TYPE_MAP,
};

// Валидация и утилиты
export const isValidWeapon = (weapon: string): weapon is WeaponId => {
  return Object.values(WEAPONS).includes(weapon as WeaponId);
};

export const getWeaponLabel = (weaponId: WeaponId): string => {
  return WEAPON_LABELS[weaponId];
};

export const isFiveStarWeapon = (weaponId: WeaponId): weaponId is FiveStarWeaponId => {
  return Object.values(FIVE_STAR_WEAPONS).includes(weaponId as FiveStarWeaponId);
};

export const isFourStarWeapon = (weaponId: WeaponId): weaponId is FourStarWeaponId => {
  return Object.values(FOUR_STAR_WEAPONS).includes(weaponId as FourStarWeaponId);
};

export const getWeaponType = (weaponId: WeaponId): string | undefined => {
  return WEAPON_TYPE_MAP[weaponId];
};

export const getAllWeapons = (): WeaponId[] => {
  return Object.values(WEAPONS);
};

export const getWeaponsByRarity = (rarity: 4 | 5): WeaponId[] => {
  return rarity === 5
    ? Object.values(FIVE_STAR_WEAPONS)
    : Object.values(FOUR_STAR_WEAPONS);
};
