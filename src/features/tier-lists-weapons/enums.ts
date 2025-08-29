import type { WeaponTypeId } from "../weapon-types/types";
import { WeaponTypeIds } from "../weapon-types/enums";
import weaponTypes from "../weapon-types/data";

const WeaponTypeNameById = (id: WeaponTypeId) => weaponTypes[id].name;

export const TierListWeaponsTitles = {
  Bow: WeaponTypeNameById(WeaponTypeIds.Bow),
  Catalyst: WeaponTypeNameById(WeaponTypeIds.Catalyst),
  Claymore: WeaponTypeNameById(WeaponTypeIds.Claymore),
  Crafted: "Крафтовое оружие",
  Polearm: WeaponTypeNameById(WeaponTypeIds.Polearm),
  Sword: WeaponTypeNameById(WeaponTypeIds.Sword),
} as const;
