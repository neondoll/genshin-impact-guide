import { WeaponTypeUidEnum } from "../enums/weapon-type";

export type WeaponType = { name: string; image_src: string; icon_src: string };
export type WeaponTypeUid = typeof WeaponTypeUidEnum[keyof typeof WeaponTypeUidEnum];
