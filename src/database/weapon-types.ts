import { publicImageSrc } from "@/lib/utils";
import { WeaponTypeUidEnum } from "./enums/weapon-types";
import type { WeaponTypes } from "./types/weapon-types";

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`weapon-types/${src}`);

export const weaponTypes = {
  [WeaponTypeUidEnum.Claymore]: {
    name: "Двуручное",
    image_src: imageSrc("claymore-128x128.png"),
    icon_src: imageSrc("claymore-icon-20x20.png"),
  },
  [WeaponTypeUidEnum.Polearm]: {
    name: "Древковое",
    image_src: imageSrc("polearm-128x128.png"),
    icon_src: imageSrc("polearm-icon-20x20.png"),
  },
  [WeaponTypeUidEnum.Catalyst]: {
    name: "Катализатор",
    image_src: imageSrc("catalyst-128x128.png"),
    icon_src: imageSrc("catalyst-icon-20x20.png"),
  },
  [WeaponTypeUidEnum.Sword]: {
    name: "Одноручное",
    image_src: imageSrc("sword-128x128.png"),
    icon_src: imageSrc("sword-icon-20x20.png"),
  },
  [WeaponTypeUidEnum.Bow]: {
    name: "Стрелковое",
    image_src: imageSrc("bow-128x128.png"),
    icon_src: imageSrc("bow-icon-20x20.png"),
  },
} as WeaponTypes;
