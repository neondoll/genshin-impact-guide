type WeaponType = { name: string; image_src: string };
type WeaponTypes = Record<WeaponTypeUid, WeaponType>;

export const WeaponTypeUidEnum = {
  /* Стрелковое  */ Bow: "bow",
  /* Катализатор */ Catalyst: "catalyst",
  /* Двуручное   */ Claymore: "claymore",
  /* Древковое   */ Polearm: "polearm",
  /* Одноручное  */ Sword: "sword",
} as const;

export type WeaponTypeUid = typeof WeaponTypeUidEnum[keyof typeof WeaponTypeUidEnum];

const imageSrc = (name: string) => {
  console.log("imageSrc", name);

  return `/images/weapon-types/${name}`;
};

const weaponTypes = {
  [WeaponTypeUidEnum.Claymore]: { name: "Двуручное", image_src: imageSrc("claymore-128x128.png") },
  [WeaponTypeUidEnum.Polearm]: { name: "Древковое", image_src: imageSrc("polearm-128x128.png") },
  [WeaponTypeUidEnum.Catalyst]: { name: "Катализатор", image_src: imageSrc("catalyst-128x128.png") },
  [WeaponTypeUidEnum.Sword]: { name: "Одноручное", image_src: imageSrc("sword-128x128.png") },
  [WeaponTypeUidEnum.Bow]: { name: "Стрелковое", image_src: imageSrc("bow-128x128.png") },
} as WeaponTypes;

export async function getWeaponTypes() {
  console.log("getWeaponTypes");

  return weaponTypes;
}
