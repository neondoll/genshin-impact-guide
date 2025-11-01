import type { CharacterRoleId } from "./character-role";
import type { ElementId } from "./element";
import type { Rarity } from "./rarity";
import type { WeaponId } from "./weapon";
import type { WeaponTypeId } from "./weapon-type";
import { type CharacterIds } from "@/enums/character";

type CharacterArkhe = "Усия" | "Пневма";

export interface Character {
  id: CharacterId;
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
  /* Изображение */
  image_src: string;
}

export type CharacterId = typeof CharacterIds[keyof typeof CharacterIds];
