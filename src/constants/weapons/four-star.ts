import { type WEAPON_TYPES } from "../weapon-types";

export const FOUR_STAR_WEAPONS = {} as const;

export type FourStarWeaponId = typeof FOUR_STAR_WEAPONS[keyof typeof FOUR_STAR_WEAPONS];

export const FOUR_STAR_WEAPON_LABELS: Record<FourStarWeaponId, string> = {} as const;

export const FOUR_STAR_WEAPON_TYPE_MAP: Partial<Record<FourStarWeaponId, typeof WEAPON_TYPES[keyof typeof WEAPON_TYPES]>> = {};
