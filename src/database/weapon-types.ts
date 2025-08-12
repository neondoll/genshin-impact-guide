import { publicImageSrc } from "@/lib/utils";
import { WeaponTypeKeys } from "./enums/weapon-type";
import type { WeaponType } from "./types/weapon-type";

class _WeaponType implements WeaponType {
  readonly key: WeaponType["key"];
  readonly name: WeaponType["name"];
  readonly abbr: WeaponType["abbr"];
  readonly image_src: WeaponType["image_src"];
  readonly icon_src: WeaponType["icon_src"];

  static PATH = "weapon-types";

  constructor(key: keyof typeof WeaponTypeKeys, name: WeaponType["name"], abbr: WeaponType["abbr"]) {
    this.key = WeaponTypeKeys[key];
    this.name = name;
    this.abbr = abbr;
    this.image_src = publicImageSrc(`${_WeaponType.PATH}/${this.key}-128x128.png`);
    this.icon_src = publicImageSrc(`${_WeaponType.PATH}/${this.key}-icon-20x20.png`);
  }
}

export default {
  [WeaponTypeKeys["🏹"]]: new _WeaponType("🏹", "Стрелковое оружие", "Стрелковое"),
  [WeaponTypeKeys["💥"]]: new _WeaponType("💥", "Катализатор", "Катализатор"),
  [WeaponTypeKeys["🗡️"]]: new _WeaponType("🗡️", "Двуручное оружие", "Двуручное"),
  [WeaponTypeKeys["🔱"]]: new _WeaponType("🔱", "Древковое оружие", "Древковое"),
  [WeaponTypeKeys["⚔️"]]: new _WeaponType("⚔️", "Одноручное оружие", "Одноручное"),
} as Record<WeaponType["key"], WeaponType>;
