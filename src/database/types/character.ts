import { CharacterKeys } from "../enums/character";
import type { CharacterRoleKey } from "./character-role";
import type { ElementKey } from "./element";
import type { Rarity } from "./rarity";
import type { WeaponKey } from "./weapon";
import type { WeaponTypeKey } from "./weapon-type";

type CharacterArkhe = "Усия" | "Пневма";

export type Character = {
  key: CharacterKey;
  /* Имя      */ name: string;
  /* Редкость */ rarity: Rarity;
  /* Оружие   */ weapon_type_key: WeaponTypeKey;
  /* Элемент  */ element_key: ElementKey;
  /* Архэ     */ arkhe?: CharacterArkhe | CharacterArkhe[];
  /* Роли     */ role_keys?: CharacterRoleKey[];
  image_src: string;
  signature_weapon_key?: WeaponKey;
};
export type CharacterKey = typeof CharacterKeys[keyof typeof CharacterKeys];
