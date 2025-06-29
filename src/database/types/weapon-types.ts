import type { WeaponTypeUidEnum } from "../enums/weapon-types";

type WeaponType = { name: string; image_src: string; icon_src?: string };

export type WeaponTypes = Record<WeaponTypeUid, WeaponType>;
export type WeaponTypeUid = typeof WeaponTypeUidEnum[keyof typeof WeaponTypeUidEnum];
