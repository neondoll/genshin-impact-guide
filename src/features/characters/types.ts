import type { CharacterRoleId } from "../character-roles/types";
import type { ElementId } from "../elements/types";
import type { Rarity } from "../rarities/types";
import type { WeaponId } from "../weapons/types";
import type { WeaponTypeId } from "../weapon-types/types";
import { CharacterIds } from "./enums";

type CharacterArkhe = "Усия" | "Пневма";

export interface Character {
  id: CharacterId;
  /* Изображение */
  image_src: string;
  /* Заголовок */
  title: string;
  /* Редкость */
  rarity?: Rarity;
  /* Оружие */
  weapon_type_id?: WeaponTypeId;
  /* Элемент */
  element_id: ElementId;
  /* Имя */
  name: string;
  /* Архэ */
  arkhe?: CharacterArkhe | CharacterArkhe[];
  /* Роли */
  role_ids?: CharacterRoleId[];
  /* Сигнатурное оружие */
  signature_weapon_id?: WeaponId;
}

export type CharacterId = typeof CharacterIds[keyof typeof CharacterIds];
