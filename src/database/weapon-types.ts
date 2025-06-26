type WeaponType = { name: string; image_src: string };
type WeaponTypes = Record<WeaponTypeUid, WeaponType>;

export const WeaponTypeUidEnum = {
  /* Лук         */ Bow: "bow",
  /* Катализатор */ Catalyst: "catalyst",
  /* Клеймор     */ Claymore: "claymore",
  /* Алебарда    */ Polearm: "polearm",
  /* Меч         */ Sword: "sword",
} as const;

export type WeaponTypeUid = typeof WeaponTypeUidEnum[keyof typeof WeaponTypeUidEnum];

const imageSrc = (name: string) => {
  console.log("imageSrc", name);

  return `/images/weapon-types/${name}`;
};

const weaponTypes = {
  [WeaponTypeUidEnum.Polearm]: { name: "Алебарда", image_src: imageSrc("polearm-128x128.png") },
  [WeaponTypeUidEnum.Catalyst]: { name: "Катализатор", image_src: imageSrc("catalyst-128x128.png") },
  [WeaponTypeUidEnum.Claymore]: { name: "Клеймор", image_src: imageSrc("claymore-128x128.png") },
  [WeaponTypeUidEnum.Bow]: { name: "Лук", image_src: imageSrc("bow-128x128.png") },
  [WeaponTypeUidEnum.Sword]: { name: "Меч", image_src: imageSrc("sword-128x128.png") },
} as WeaponTypes;

export async function getWeaponTypes() {
  console.log("getWeaponTypes");

  return weaponTypes;
}
