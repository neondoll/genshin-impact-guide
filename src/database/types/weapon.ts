import { WeaponKeys } from "../enums/weapon";
import type { Rarity } from "./rarity";
import type { StatKey } from "./stat";
import type { WeaponTypeKey } from "./weapon-type";

export interface Weapon {
  key: WeaponKey;
  /* Имя                           */
  name: string;
  /* Редкость                      */
  rarity: Rarity;
  /* Где найти                     */
  source?: string;
  /* Тип                           */
  type_key: WeaponTypeKey;
  /* Базовая атака                 */
  base_atk: WeaponStatValue;
  /* Дополнительные характеристики */
  secondary_stats: WeaponStatValue & { key: StatKey };
  image_src: string;
}

export interface WeaponStatValue {
  min_value: string | number;
  max_value: string | number;
}

export type WeaponKey = typeof WeaponKeys[keyof typeof WeaponKeys];
