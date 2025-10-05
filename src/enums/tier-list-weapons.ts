import type { WeaponTypeId } from "@/types/weapon-type";
import { WeaponTypeIds } from "./weapon-type";
import weaponTypes from "@/data/weapon-types";

const WeaponTypeNameById = (id: WeaponTypeId) => weaponTypes[id].name;

export const TierListWeaponsTitles = {
  Bow: WeaponTypeNameById(WeaponTypeIds.Bow),
  Catalyst: WeaponTypeNameById(WeaponTypeIds.Catalyst),
  Claymore: WeaponTypeNameById(WeaponTypeIds.Claymore),
  Crafted: "Крафтовое оружие",
  Polearm: WeaponTypeNameById(WeaponTypeIds.Polearm),
  Sword: WeaponTypeNameById(WeaponTypeIds.Sword),
} as const;
