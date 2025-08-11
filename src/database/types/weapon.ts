import { WeaponKeys } from "../enums/weapon";
import type { Rarity } from "./rarity";
import type { StAtkey } from "./stat";
import type { WeaponTypeKey } from "./weapon-type";

type WeaponStatValue = { min_value: string | number; max_value: string | number };

export type Weapon = {
  key: WeaponKey;
  /* Имя                           */ name: string;
  /* Редкость                      */ rarity: Rarity;
  /* Где найти                     */ source?: string;
  /* Тип                           */ type_key: WeaponTypeKey;
  /* Базовая атака                 */ base_Atk: WeaponStatValue;
  /* Дополнительные характеристики */ secondary_stats?: WeaponStatValue & { key: StAtkey };
  image_src: string;
};
export type WeaponKey = typeof WeaponKeys[keyof typeof WeaponKeys];
