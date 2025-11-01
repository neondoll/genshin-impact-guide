import { type FoodTypeIds } from "@/enums/food-type";

export interface FoodType {
  id: FoodTypeId;
  name: string;
}

export type FoodTypeId = typeof FoodTypeIds[keyof typeof FoodTypeIds];
