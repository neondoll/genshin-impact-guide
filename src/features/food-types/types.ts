import { FoodTypeIds } from "./enums";

export interface FoodType {
  id: FoodTypeId;
  name: string;
}

export type FoodTypeId = typeof FoodTypeIds[keyof typeof FoodTypeIds];
