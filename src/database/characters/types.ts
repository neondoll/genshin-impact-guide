import type { ICharacterRecommendations } from "../characters-recommendations/types";
import type { ICharacterRole } from "../character-roles/types";
import type { IElement } from "../elements/types";
import type { IWeaponType } from "../weapon-types/types";
import type { TRarity } from "../rarities/types";
import type { TWeaponKey } from "../weapons/types";
import { CharacterKeys } from "../characters/enums";

export interface ICharacter {
  key: TCharacterKey;
  /* Имя */
  name: string;
  /* Редкость */
  rarity: TRarity;
  /* Оружие */
  weapon_type_key: IWeaponType["key"];
  /* Элемент */
  element_key: IElement["key"];
  /* Архэ */
  arkhe?: TCharacterArkhe | TCharacterArkhe[];
  /* Роли */
  role_keys?: ICharacterRole["key"][];
  image_src: string;
  signature_weapon_key?: TWeaponKey;

  getElement: () => Promise<IElement>;
  getRecommendations: () => Promise<ICharacterRecommendations | undefined>;

  getRoles(): ICharacterRole[] | undefined;

  getWeaponType: () => Promise<IWeaponType>;
}

export type TCharacterArkhe = "Усия" | "Пневма";
export type TCharacterKey = typeof CharacterKeys[keyof typeof CharacterKeys];
