import type { WEAPON_TYPES } from "@/constants/weapon-types";

export type WeaponTypeId = typeof WEAPON_TYPES[keyof typeof WEAPON_TYPES];

export interface WeaponType {
  id: WeaponTypeId;
  name: string;
  abbr: string;
  imageSrc: string; // camelCase вместо snake_case
  iconSrc: string; // camelCase вместо snake_case
}

// Вспомогательные типы
export interface WeaponTypeWithMetadata extends WeaponType {
  description: string;
  category: "melee" | "ranged";
  attackSpeed: "fast" | "medium" | "slow";
}

export type WeaponTypeMap = Record<WeaponTypeId, WeaponType>;
