import type { CharacterRole } from "./character-role";
import type { Element } from "./element";
import type { Rarity } from "./rarity";
import type { WeaponKey } from "./weapon";
import type { WeaponType } from "./weapon-type";
import { CharacterKeys } from "../enums/character";
import { getCharacterRecommendations, getCharacterRole, getElement, getWeaponType } from "@/database";

export type Character = {
  key: CharacterKey;
  /* Имя      */ name: string;
  /* Редкость */ rarity: Rarity;
  /* Оружие   */ weapon_type_key: WeaponType["key"];
  /* Элемент  */ element_key: Element["key"];
  /* Архэ     */ arkhe?: CharacterArkhe | CharacterArkhe[];
  /* Роли     */ role_keys?: CharacterRole["key"][];
  image_src: string;
  signature_weapon_key?: WeaponKey;

  getElement: () => ReturnType<typeof getElement>;
  getRecommendations: () => ReturnType<typeof getCharacterRecommendations>;
  getRoles: () => Promise<Awaited<ReturnType<typeof getCharacterRole>>[] | undefined>;
  getWeaponType: () => ReturnType<typeof getWeaponType>;
};
export type CharacterArkhe = "Усия" | "Пневма";
export type CharacterKey = typeof CharacterKeys[keyof typeof CharacterKeys];
