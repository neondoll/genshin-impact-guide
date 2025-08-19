import type { IFoodType } from "./types";
import { FoodTypeKeys } from "./enums";

export class CFoodType implements IFoodType {
  readonly key: IFoodType["key"];
  readonly name: IFoodType["name"];

  constructor(key: keyof typeof FoodTypeKeys, name: IFoodType["name"]) {
    this.key = FoodTypeKeys[key];
    this.name = name;
  }
}
