import type { IFoodType } from "./types";

export class CFoodType implements IFoodType {
  readonly key: IFoodType["key"];
  readonly name: IFoodType["name"];

  constructor(key: IFoodType["key"], name: IFoodType["name"]) {
    this.key = key;
    this.name = name;
  }

  static init(params: ConstructorParameters<typeof CFoodType>) {
    return new CFoodType(...params);
  }
}
