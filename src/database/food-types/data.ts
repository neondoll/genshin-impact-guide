import type { IFoodType } from "./types";
import { CFoodType } from "./classes";
import { FoodTypeKeys } from "./enums";

export default {
  [FoodTypeKeys.ATKBoostingDish]: new CFoodType("ATKBoostingDish", "Блюдо для атаки"),
  [FoodTypeKeys.RecoveryDish]: new CFoodType("RecoveryDish", "Восстанавливающее блюдо"),
} as Record<IFoodType["key"], IFoodType>;
