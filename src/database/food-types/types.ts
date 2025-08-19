import { FoodTypeKeys } from "./enums";

export interface IFoodType {
  key: TFoodTypeKey;
  name: string;
}

export type TFoodTypeKey = typeof FoodTypeKeys[keyof typeof FoodTypeKeys];
