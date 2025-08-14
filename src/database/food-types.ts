import { FoodTypeKeys } from "./enums/food-type";
import type { FoodType } from "./types/food-type";

class _FoodType implements FoodType {
  readonly key: FoodType["key"];
  readonly name: FoodType["name"];

  constructor(key: keyof typeof FoodTypeKeys, name: FoodType["name"]) {
    this.key = FoodTypeKeys[key];
    this.name = name;
  }
}

export default {
  [FoodTypeKeys.ATKBoostingDish]: new _FoodType("ATKBoostingDish", "Блюдо для атаки"),
  [FoodTypeKeys.RecoveryDish]: new _FoodType("RecoveryDish", "Восстанавливающее блюдо"),
} as Record<FoodType["key"], FoodType>;
