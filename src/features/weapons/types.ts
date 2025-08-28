import type { Rarity } from "../rarities/types";
import type { StatId } from "../stats/types";
import type { WeaponTypeId } from "../weapon-types/types";
import { WeaponIds } from "./enums";

export interface Weapon {
  id: WeaponId;
  /* Имя                           */
  name: string;
  /* Редкость                      */
  rarity: Rarity;
  /* Где найти                     */
  source?: string;
  /* Тип                           */
  type_id: WeaponTypeId;
  /* Базовая атака                 */
  base_atk: WeaponStatValue;
  /* Дополнительные характеристики */
  secondary_stats: WeaponStatValue & { id: StatId };
  image_src: string;
}

export interface WeaponStatValue {
  min_value: string | number;
  max_value: string | number;
}

export type WeaponId = typeof WeaponIds[keyof typeof WeaponIds];
