import { type WEAPON_TYPES } from "../weapon-types";

export const FIVE_STAR_WEAPONS = {} as const;

export type FiveStarWeaponId = typeof FIVE_STAR_WEAPONS[keyof typeof FIVE_STAR_WEAPONS];

export const FIVE_STAR_WEAPON_LABELS: Record<FiveStarWeaponId, string> = {} as const;

export const FIVE_STAR_WEAPON_TYPE_MAP: Partial<Record<FiveStarWeaponId, typeof WEAPON_TYPES[keyof typeof WEAPON_TYPES]>> = {};
