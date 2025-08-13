import { CharacterKeys } from "../enums/character";
import type { CharacterRecommendations } from "./character-recommendations";
import type { CharacterRole, CharacterRoleKey } from "./character-role";
import type { Element, ElementKey } from "./element";
import type { Rarity } from "./rarity";
import type { WeaponKey } from "./weapon";
import type { WeaponType, WeaponTypeKey } from "./weapon-type";

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

  element: Element;
  recommendations?: CharacterRecommendations;
  roles?: CharacterRole[];
  weapon_type: WeaponType;
};
export type CharacterArkhe = "Усия" | "Пневма";
export type CharacterKey = typeof CharacterKeys[keyof typeof CharacterKeys];
