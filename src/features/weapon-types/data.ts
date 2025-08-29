import type { WeaponType } from "./types";
import { publicImageSrc } from "@/lib/utils";
import { WeaponTypeIds } from "./enums";

class WeaponTypeClass implements WeaponType {
  readonly id: WeaponType["id"];
  readonly name: WeaponType["name"];
  readonly abbr: WeaponType["abbr"];
  readonly image_src: WeaponType["image_src"];
  readonly icon_src: WeaponType["icon_src"];

  static PATH = "weapon-types";

  constructor(id: WeaponType["id"], name: WeaponType["name"], abbr: WeaponType["abbr"]) {
    this.id = id;
    this.name = name;
    this.abbr = abbr;
    this.image_src = publicImageSrc(`${WeaponTypeClass.PATH}/${id}-128x128.png`);
    this.icon_src = publicImageSrc(`${WeaponTypeClass.PATH}/${id}-icon-20x20.png`);
  }

  static init(params: ConstructorParameters<typeof WeaponTypeClass>) {
    return new WeaponTypeClass(...params);
  }
}

export default {
  [WeaponTypeIds.Bow]: WeaponTypeClass.init([WeaponTypeIds.Bow, "Стрелковое оружие", "Стрелковое"]),
  [WeaponTypeIds.Catalyst]: WeaponTypeClass.init([WeaponTypeIds.Catalyst, "Катализатор", "Катализатор"]),
  [WeaponTypeIds.Claymore]: WeaponTypeClass.init([WeaponTypeIds.Claymore, "Двуручное оружие", "Двуручное"]),
  [WeaponTypeIds.Polearm]: WeaponTypeClass.init([WeaponTypeIds.Polearm, "Древковое оружие", "Древковое"]),
  [WeaponTypeIds.Sword]: WeaponTypeClass.init([WeaponTypeIds.Sword, "Одноручное оружие", "Одноручное"]),
} as Record<WeaponType["id"], WeaponType>;
