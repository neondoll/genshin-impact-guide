import { WeaponTypeKeys } from "../enums/weapon-type";

export type WeaponType = {
  key: WeaponTypeKey;
  name: string;
  abbreviation: string;
  image_src: string;
  icon_src: string;
};
export type WeaponTypeKey = typeof WeaponTypeKeys[keyof typeof WeaponTypeKeys];
