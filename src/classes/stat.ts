import type { Stat as Type } from "@/types/stat";

export class Stat implements Type {
  readonly id: Type["id"];
  readonly name: Type["name"];
  readonly abbr: Type["abbr"];

  constructor(id: Type["id"], name: Type["name"], abbr: Type["abbr"] = undefined) {
    this.id = id;
    this.name = name;
    this.abbr = abbr;
  }

  static init(params: ConstructorParameters<typeof Stat>) {
    return new Stat(...params);
  }
}
