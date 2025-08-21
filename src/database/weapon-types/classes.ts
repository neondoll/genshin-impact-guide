import type { IWeaponType } from "./types";
import { publicImageSrc } from "@/lib/utils";

export class CWeaponType implements IWeaponType {
  readonly key: IWeaponType["key"];
  readonly name: IWeaponType["name"];
  readonly abbr: IWeaponType["abbr"];
  readonly image_src: IWeaponType["image_src"];
  readonly icon_src: IWeaponType["icon_src"];

  static PATH = "weapon-types";

  constructor(key: IWeaponType["key"], name: IWeaponType["name"], abbr: IWeaponType["abbr"]) {
    this.key = key;
    this.name = name;
    this.abbr = abbr;
    this.image_src = publicImageSrc(`${CWeaponType.PATH}/${key}-128x128.png`);
    this.icon_src = publicImageSrc(`${CWeaponType.PATH}/${key}-icon-20x20.png`);
  }

  static init(params: ConstructorParameters<typeof CWeaponType>) {
    return new CWeaponType(...params);
  }
}
