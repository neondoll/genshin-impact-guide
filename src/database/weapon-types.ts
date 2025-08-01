import { publicImageSrc } from "@/lib/utils";
import { WeaponTypeUidEnum } from "./enums/weapon-type";
import type { WeaponType, WeaponTypeUid } from "./types/weapon-type";

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`weapon-types/${src}`);

export default {
  [WeaponTypeUidEnum.Bow]: {
    uid: WeaponTypeUidEnum.Bow,
    name: "Стрелковое оружие",
    abbreviation: "Стрелковое оружие",
    image_src: imageSrc("bow-128x128.png"),
    icon_src: imageSrc("bow-icon-20x20.png"),
  },
  [WeaponTypeUidEnum.Catalyst]: {
    uid: WeaponTypeUidEnum.Catalyst,
    name: "Катализатор",
    abbreviation: "Катализатор",
    image_src: imageSrc("catalyst-128x128.png"),
    icon_src: imageSrc("catalyst-icon-20x20.png"),
  },
  [WeaponTypeUidEnum.Claymore]: {
    uid: WeaponTypeUidEnum.Claymore,
    name: "Двуручное оружие",
    abbreviation: "Двуручное оружие",
    image_src: imageSrc("claymore-128x128.png"),
    icon_src: imageSrc("claymore-icon-20x20.png"),
  },
  [WeaponTypeUidEnum.Polearm]: {
    uid: WeaponTypeUidEnum.Polearm,
    name: "Древковое оружие",
    abbreviation: "Древковое",
    image_src: imageSrc("polearm-128x128.png"),
    icon_src: imageSrc("polearm-icon-20x20.png"),
  },
  [WeaponTypeUidEnum.Sword]: {
    uid: WeaponTypeUidEnum.Sword,
    name: "Одноручное оружие",
    abbreviation: "Одноручное",
    image_src: imageSrc("sword-128x128.png"),
    icon_src: imageSrc("sword-icon-20x20.png"),
  },
} as Record<WeaponTypeUid, WeaponType>;
