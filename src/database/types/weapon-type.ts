import { WeaponTypeUidEnum } from "../enums/weapon-type";

export type WeaponType = {
  uid: WeaponTypeUid;
  name: string;
  abbreviation: string;
  image_src: string;
  icon_src: string;
};
export type WeaponTypeUid = typeof WeaponTypeUidEnum[keyof typeof WeaponTypeUidEnum];
