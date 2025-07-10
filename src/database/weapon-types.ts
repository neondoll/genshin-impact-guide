import { publicImageSrc } from "@/lib/utils";
import { WeaponTypeUidEnum } from "./enums/weapon-type";
import type { WeaponType, WeaponTypeUid } from "./types/weapon-type";

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`weapon-types/${src}`);

export default {
  [WeaponTypeUidEnum.Bow]: {
    name: "Стрелковое оружие",
    image_src: imageSrc("bow-128x128.png"),
    icon_src: imageSrc("bow-icon-20x20.png"),
  },
  [WeaponTypeUidEnum.Catalyst]: {
    name: "Катализатор",
    image_src: imageSrc("catalyst-128x128.png"),
    icon_src: imageSrc("catalyst-icon-20x20.png"),
  },
  [WeaponTypeUidEnum.Claymore]: {
    name: "Двуручное оружие",
    image_src: imageSrc("claymore-128x128.png"),
    icon_src: imageSrc("claymore-icon-20x20.png"),
  },
  [WeaponTypeUidEnum.Polearm]: {
    name: "Древковое оружие",
    image_src: imageSrc("polearm-128x128.png"),
    icon_src: imageSrc("polearm-icon-20x20.png"),
  },
  [WeaponTypeUidEnum.Sword]: {
    name: "Одноручное оружие",
    image_src: imageSrc("sword-128x128.png"),
    icon_src: imageSrc("sword-icon-20x20.png"),
  },
} as Record<WeaponTypeUid, WeaponType>;
