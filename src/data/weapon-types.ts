import type { WeaponType as Type } from "@/types/weapon-type";
import { WeaponType as Class } from "@/classes/weapon-type";
import { WeaponTypeIds } from "@/enums/weapon-type";

export default {
  [WeaponTypeIds.Bow]: Class.init([WeaponTypeIds.Bow, "Стрелковое оружие", "Стрелковое"]),
  [WeaponTypeIds.Catalyst]: Class.init([WeaponTypeIds.Catalyst, "Катализатор", "Катализатор"]),
  [WeaponTypeIds.Claymore]: Class.init([WeaponTypeIds.Claymore, "Двуручное оружие", "Двуручное"]),
  [WeaponTypeIds.Polearm]: Class.init([WeaponTypeIds.Polearm, "Древковое оружие", "Древковое"]),
  [WeaponTypeIds.Sword]: Class.init([WeaponTypeIds.Sword, "Одноручное оружие", "Одноручное"]),
} as Record<Type["id"], Type>;
