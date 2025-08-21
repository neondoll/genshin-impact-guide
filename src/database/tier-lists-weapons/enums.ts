import type { TWeaponTypeKey } from "../weapon-types/types";
import { WeaponTypeKeys } from "../weapon-types/enums";
import weaponTypes from "../weapon-types/data";

const WeaponTypeNameByKey = (key: TWeaponTypeKey) => weaponTypes[key].name;

export const TierListWeaponsKeys = {
  Bow: WeaponTypeNameByKey(WeaponTypeKeys.Bow),
  Catalyst: WeaponTypeNameByKey(WeaponTypeKeys.Catalyst),
  Claymore: WeaponTypeNameByKey(WeaponTypeKeys.Claymore),
  Crafted: "Крафтовое оружие",
  Polearm: WeaponTypeNameByKey(WeaponTypeKeys.Polearm),
  Sword: WeaponTypeNameByKey(WeaponTypeKeys.Sword),
} as const;
