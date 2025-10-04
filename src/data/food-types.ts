import type { FoodType as Type } from "@/types/food-type";
import { FoodType as Class } from "@/classes/food-type";
import { FoodTypeIds } from "@/enums/food-type";

export default {
  [FoodTypeIds.AdventurersDish]: Class.init([FoodTypeIds.AdventurersDish, "Блюдо для приключений"]),
  [FoodTypeIds.ATKBoostingDish]: Class.init([FoodTypeIds.ATKBoostingDish, "Блюдо для атаки"]),
  [FoodTypeIds.DEFBoostingDish]: Class.init([FoodTypeIds.DEFBoostingDish, "Блюдо для защиты"]),
  [FoodTypeIds.Other]: Class.init([FoodTypeIds.Other, ""]),
  [FoodTypeIds.RecoveryDish]: Class.init([FoodTypeIds.RecoveryDish, "Восстанавливающее блюдо"]),
} as Record<Type["id"], Type>;
