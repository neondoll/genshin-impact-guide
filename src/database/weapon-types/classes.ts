import type { IWeaponType } from "./types";
import { publicImageSrc } from "@/lib/utils";
import { WeaponTypeKeys } from "./enums";

export class CWeaponType implements IWeaponType {
  readonly key: IWeaponType["key"];
  readonly name: IWeaponType["name"];
  readonly abbr: IWeaponType["abbr"];
  readonly image_src: IWeaponType["image_src"];
  readonly icon_src: IWeaponType["icon_src"];

  static PATH = "weapon-types";

  constructor(key: keyof typeof WeaponTypeKeys, name: IWeaponType["name"], abbr: IWeaponType["abbr"]) {
    this.key = WeaponTypeKeys[key];
    this.name = name;
    this.abbr = abbr;
    this.image_src = publicImageSrc(`${CWeaponType.PATH}/${this.key}-128x128.png`);
    this.icon_src = publicImageSrc(`${CWeaponType.PATH}/${this.key}-icon-20x20.png`);
  }
}
