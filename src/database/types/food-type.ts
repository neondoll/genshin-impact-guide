import { FoodTypeKeys } from "../enums/food-type";

export interface FoodType {
  key: FoodTypeKey;
  name: string;
}

export type FoodTypeKey = typeof FoodTypeKeys[keyof typeof FoodTypeKeys];
