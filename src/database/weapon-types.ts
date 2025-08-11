import { publicImageSrc } from "@/lib/utils";
import { WeaponTypeKeys } from "./enums/weapon-type";
import type { WeaponType, WeaponTypeKey } from "./types/weapon-type";

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`weapon-types/${src}`);

export default {
  [WeaponTypeKeys.Bow]: {
    key: WeaponTypeKeys.Bow,
    name: "Стрелковое оружие",
    abbreviation: "Стрелковое",
    image_src: imageSrc("bow-128x128.png"),
    icon_src: imageSrc("bow-icon-20x20.png"),
  },
  [WeaponTypeKeys.Catalyst]: {
    key: WeaponTypeKeys.Catalyst,
    name: "Катализатор",
    abbreviation: "Катализатор",
    image_src: imageSrc("catalyst-128x128.png"),
    icon_src: imageSrc("catalyst-icon-20x20.png"),
  },
  [WeaponTypeKeys.Claymore]: {
    key: WeaponTypeKeys.Claymore,
    name: "Двуручное оружие",
    abbreviation: "Двуручное оружие",
    image_src: imageSrc("claymore-128x128.png"),
    icon_src: imageSrc("claymore-icon-20x20.png"),
  },
  [WeaponTypeKeys.Polearm]: {
    key: WeaponTypeKeys.Polearm,
    name: "Древковое оружие",
    abbreviation: "Древковое",
    image_src: imageSrc("polearm-128x128.png"),
    icon_src: imageSrc("polearm-icon-20x20.png"),
  },
  [WeaponTypeKeys.Sword]: {
    key: WeaponTypeKeys.Sword,
    name: "Одноручное оружие",
    abbreviation: "Одноручное",
    image_src: imageSrc("sword-128x128.png"),
    icon_src: imageSrc("sword-icon-20x20.png"),
  },
} as Record<WeaponTypeKey, WeaponType>;
