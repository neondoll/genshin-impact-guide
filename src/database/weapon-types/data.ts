import type { IWeaponType } from "./types";
import { CWeaponType } from "./classes";
import { WeaponTypeKeys } from "./enums";

export default {
  [WeaponTypeKeys.Bow]: CWeaponType.init([WeaponTypeKeys.Bow, "Стрелковое оружие", "Стрелковое"]),
  [WeaponTypeKeys.Catalyst]: CWeaponType.init([WeaponTypeKeys.Catalyst, "Катализатор", "Катализатор"]),
  [WeaponTypeKeys.Claymore]: CWeaponType.init([WeaponTypeKeys.Claymore, "Двуручное оружие", "Двуручное"]),
  [WeaponTypeKeys.Polearm]: CWeaponType.init([WeaponTypeKeys.Polearm, "Древковое оружие", "Древковое"]),
  [WeaponTypeKeys.Sword]: CWeaponType.init([WeaponTypeKeys.Sword, "Одноручное оружие", "Одноручное"]),
} as Record<IWeaponType["key"], IWeaponType>;
