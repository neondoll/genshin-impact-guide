import type { IFoodType } from "./types";
import { CFoodType } from "./classes";
import { FoodTypeKeys } from "./enums";

export default {
  [FoodTypeKeys.ATKBoostingDish]: CFoodType.init([FoodTypeKeys.ATKBoostingDish, "Блюдо для атаки"]),
  [FoodTypeKeys.RecoveryDish]: CFoodType.init([FoodTypeKeys.RecoveryDish, "Восстанавливающее блюдо"]),
} as Record<IFoodType["key"], IFoodType>;
