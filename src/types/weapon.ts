import type { Rarity } from "./rarity";
import type { StatId } from "./stat";
import type { WeaponTypeId } from "./weapon-type";
import { type WeaponIds } from "@/enums/weapon";

export interface Weapon {
  id: WeaponId;
  /* Изображение */
  image_src: string;
  /* Имя */
  title: string;
  /* Редкость */
  rarity: Rarity;
  /* Где найти */
  source: string | string[];
  /* Тип */
  type_id: WeaponTypeId;
  /* Базовая атака */
  base_atk: WeaponStatValue;
  /* Дополнительные характеристики */
  secondary_stats_id: StatId;
  /* Дополнительные характеристики */
  secondary_stats: WeaponStatValue;
  /* Пассивная способность */
  passive_ability?: WeaponPassiveAbility;
}

export interface WeaponPassiveAbility {
  name: string;
  description: string;
}

export interface WeaponStatValue {
  min_value: string | number;
  max_value: string | number;
}

export type WeaponId = typeof WeaponIds[keyof typeof WeaponIds];
