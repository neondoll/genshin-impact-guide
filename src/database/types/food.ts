import { FoodKeys } from "../enums/food";
import type { FoodType } from "./food-type";

export interface Food {
  key: FoodKey;
  /* Имя */
  name: string;
  /* Тип */
  type_key: FoodType["key"];
  /* Назначение */
  utility: string;
  /* Где найти */
  source: string;
}

export type FoodKey = typeof FoodKeys[keyof typeof FoodKeys];
