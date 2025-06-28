import { publicImageSrc } from "@/lib/utils";

type WeaponType = { name: string; image_src: string; icon_src?: string };
type WeaponTypes = Record<WeaponTypeUid, WeaponType>;

export type WeaponTypeUid = typeof WeaponTypeUidEnum[keyof typeof WeaponTypeUidEnum];

export const WeaponTypeUidEnum = {
  /* Стрелковое  */ Bow: "bow",
  /* Катализатор */ Catalyst: "catalyst",
  /* Двуручное   */ Claymore: "claymore",
  /* Древковое   */ Polearm: "polearm",
  /* Одноручное  */ Sword: "sword",
} as const;

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`weapon-types/${src}`);

const weaponTypes = {
  [WeaponTypeUidEnum.Claymore]: { name: "Двуручное", image_src: imageSrc("claymore-128x128.png") },
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
  [WeaponTypeUidEnum.Bow]: { name: "Стрелковое", image_src: imageSrc("bow-128x128.png") },
} as WeaponTypes;

export function getWeaponType(uid: WeaponTypeUid) {
  return weaponTypes[uid];
}

export function getWeaponTypes() {
  return weaponTypes;
}
