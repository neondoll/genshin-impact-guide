import type { FoodType } from "./types";
import { FoodTypeIds } from "./enums";

class FoodTypeClass implements FoodType {
  readonly id: FoodType["id"];
  readonly name: FoodType["name"];

  constructor(id: FoodType["id"], name: FoodType["name"]) {
    this.id = id;
    this.name = name;
  }

  static init(params: ConstructorParameters<typeof FoodTypeClass>) {
    return new FoodTypeClass(...params);
  }
}

export default {
  [FoodTypeIds.ATKBoostingDish]: FoodTypeClass.init([FoodTypeIds.ATKBoostingDish, "Блюдо для атаки"]),
  [FoodTypeIds.RecoveryDish]: FoodTypeClass.init([FoodTypeIds.RecoveryDish, "Восстанавливающее блюдо"]),
} as Record<FoodType["id"], FoodType>;
