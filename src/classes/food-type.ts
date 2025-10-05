import type { FoodType as Type } from "@/types/food-type";

export class FoodType implements Type {
  readonly id: Type["id"];
  readonly name: Type["name"];

  constructor(id: Type["id"], name: Type["name"]) {
    this.id = id;
    this.name = name;
  }

  static init(params: ConstructorParameters<typeof FoodType>) {
    return new FoodType(...params);
  }
}
