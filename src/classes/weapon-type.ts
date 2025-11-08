import type { WeaponType as Type } from "@/types/weapon-type";
import { publicImageSrc } from "@/lib/utils";

export class WeaponType implements Type {
  readonly id: Type["id"];
  readonly name: Type["name"];
  readonly abbr: Type["abbr"];
  readonly imageSrc: Type["imageSrc"];
  readonly iconSrc: Type["iconSrc"];

  static PATH = "weapon-types";

  constructor(id: Type["id"], name: Type["name"], abbr: Type["abbr"]) {
    this.id = id;
    this.name = name;
    this.abbr = abbr;
    this.imageSrc = publicImageSrc(`${WeaponType.PATH}/${id}-128x128.png`);
    this.iconSrc = publicImageSrc(`${WeaponType.PATH}/${id}-icon-20x20.png`);
  }

  static init(params: ConstructorParameters<typeof WeaponType>) {
    return new WeaponType(...params);
  }
}
