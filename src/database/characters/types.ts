import type { CharacterRecommendations } from "../types/character-recommendations";
import type { Element } from "../types/element";
import type { ICharacterRole } from "../character-roles/types";
import type { Rarity } from "../types/rarity";
import type { WeaponKey } from "../types/weapon";
import type { WeaponType } from "../types/weapon-type";
import { CharacterKeys } from "../characters/enums";

export interface ICharacter {
  key: TCharacterKey;
  /* Имя */
  name: string;
  /* Редкость */
  rarity: Rarity;
  /* Оружие */
  weapon_type_key: WeaponType["key"];
  /* Элемент */
  element_key: Element["key"];
  /* Архэ */
  arkhe?: TCharacterArkhe | TCharacterArkhe[];
  /* Роли */
  role_keys?: ICharacterRole["key"][];
  image_src: string;
  signature_weapon_key?: WeaponKey;

  getElement: () => Promise<Element>;
  getRecommendations: () => Promise<CharacterRecommendations | undefined>;
  getRoles: () => Promise<ICharacterRole[] | undefined>;
  getWeaponType: () => Promise<WeaponType>;
}

export type TCharacterArkhe = "Усия" | "Пневма";
export type TCharacterKey = typeof CharacterKeys[keyof typeof CharacterKeys];
