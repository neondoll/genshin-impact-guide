import type { WeaponType as Type } from "@/types/weapon-type";
import { WeaponType as Class } from "@/classes/weapon-type";
import { WEAPON_TYPES } from "@/constants/weapon-types";

export default {
  [WEAPON_TYPES.BOW]: Class.init([WEAPON_TYPES.BOW, "Стрелковое оружие", "Стрелковое"]),
  [WEAPON_TYPES.CATALYST]: Class.init([WEAPON_TYPES.CATALYST, "Катализатор", "Катализатор"]),
  [WEAPON_TYPES.CLAYMORE]: Class.init([WEAPON_TYPES.CLAYMORE, "Двуручное оружие", "Двуручное"]),
  [WEAPON_TYPES.POLEARM]: Class.init([WEAPON_TYPES.POLEARM, "Древковое оружие", "Древковое"]),
  [WEAPON_TYPES.SWORD]: Class.init([WEAPON_TYPES.SWORD, "Одноручное оружие", "Одноручное"]),
} as Record<Type["id"], Type>;
