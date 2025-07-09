import type { QualityUid } from "./qualities";
import type { WeaponTypeUid } from "./weapon-types";
import type { WeaponUidEnum } from "../enums/weapons";

type Weapon = { uid?: WeaponUid; name: string; type: WeaponTypeUid; quality: QualityUid; image_src: string };

export type Weapons = Record<WeaponUid, Weapon>;
export type WeaponUid = typeof WeaponUidEnum[keyof typeof WeaponUidEnum];
