import type { TCharacterRoleKey } from "../character-roles/types";
import type { TElementKey } from "../elements/types";
import type { TRarity } from "../rarities/types";
import type { TWeaponKey } from "../weapons/types";
import type { TWeaponTypeKey } from "../weapon-types/types";
import { CharacterKeys } from "../characters/enums";

export interface ICharacter {
  key: TCharacterKey;
  /* Имя */
  name: string;
  /* Редкость */
  rarity: TRarity;
  /* Оружие */
  weapon_type_key: TWeaponTypeKey;
  /* Элемент */
  element_key: TElementKey;
  /* Архэ */
  arkhe?: TCharacterArkhe | TCharacterArkhe[];
  /* Роли */
  role_keys?: TCharacterRoleKey[];
  image_src: string;
  signature_weapon_key?: TWeaponKey;
}

export type TCharacterArkhe = "Усия" | "Пневма";
export type TCharacterKey = typeof CharacterKeys[keyof typeof CharacterKeys];
