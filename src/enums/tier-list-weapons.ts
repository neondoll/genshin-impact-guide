import type { WeaponTypeId } from "@/types/weapon-type";
import { WEAPON_TYPES } from "@/constants/weapon-types";
import weaponTypes from "@/data/weapon-types";

const WeaponTypeNameById = (id: WeaponTypeId) => weaponTypes[id].name;

export const TierListWeaponsTitles = {
  Bow: WeaponTypeNameById(WEAPON_TYPES.BOW),
  Catalyst: WeaponTypeNameById(WEAPON_TYPES.CATALYST),
  Claymore: WeaponTypeNameById(WEAPON_TYPES.CLAYMORE),
  Crafted: "Крафтовое оружие",
  Polearm: WeaponTypeNameById(WEAPON_TYPES.POLEARM),
  Sword: WeaponTypeNameById(WEAPON_TYPES.SWORD),
} as const;
