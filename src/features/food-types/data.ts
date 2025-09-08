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
  [FoodTypeIds.AdventurersDish]: FoodTypeClass.init([FoodTypeIds.AdventurersDish, "Блюдо для приключений"]),
  [FoodTypeIds.ATKBoostingDish]: FoodTypeClass.init([FoodTypeIds.ATKBoostingDish, "Блюдо для атаки"]),
  [FoodTypeIds.DEFBoostingDish]: FoodTypeClass.init([FoodTypeIds.DEFBoostingDish, "Блюдо для защиты"]),
  [FoodTypeIds.Other]: FoodTypeClass.init([FoodTypeIds.Other, ""]),
  [FoodTypeIds.RecoveryDish]: FoodTypeClass.init([FoodTypeIds.RecoveryDish, "Восстанавливающее блюдо"]),
} as Record<FoodType["id"], FoodType>;
