import type { Rarity } from "@/features/rarities/types";
import type { TStatKey } from "../stats/types";
import type { TWeaponTypeKey } from "../weapon-types/types";
import { WeaponKeys } from "./enums";

export interface IWeapon {
  key: TWeaponKey;
  /* Имя                           */
  name: string;
  /* Редкость                      */
  rarity: Rarity;
  /* Где найти                     */
  source?: string;
  /* Тип                           */
  type_key: TWeaponTypeKey;
  /* Базовая атака                 */
  base_atk: IWeaponStatValue;
  /* Дополнительные характеристики */
  secondary_stats: IWeaponStatValue & { key: TStatKey };
  image_src: string;
}

export interface IWeaponStatValue {
  min_value: string | number;
  max_value: string | number;
}

export type TWeaponKey = typeof WeaponKeys[keyof typeof WeaponKeys];
