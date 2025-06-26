type WeaponType = { name: string; image_src: string };
type WeaponTypes = Record<string, WeaponType>;

export const WeaponTypeUidEnum = {
  /* Алебарда */ Polearm: "polearm",
} as const;

export type WeaponTypeUid = typeof WeaponTypeUidEnum[keyof typeof WeaponTypeUidEnum];

const imageSrc = (name: string) => {
  console.log("imageSrc", name);

  return `/images/weapon-types/${name}`;
};

const weaponTypes = {
  [WeaponTypeUidEnum.Polearm]: { name: "Алебарда", image_src: imageSrc("polearm-128x128.png") },
} as WeaponTypes;

export async function getWeaponTypes() {
  console.log("getWeaponTypes");

  return weaponTypes;
}
