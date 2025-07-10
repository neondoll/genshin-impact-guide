import { WeaponUidEnum } from "../enums/weapon";
import type { AttributeUid } from "./attribute";
import type { QualityUid } from "./quality";
import type { WeaponTypeUid } from "./weapon-type";

export type Weapon = {
  uid: WeaponUid;
  name: string;
  image_src: string;
  type_uid: WeaponTypeUid;
  quality: QualityUid;
  base_atk: { min_value: string; max_value: string };
  secondary_attribute: { uid: AttributeUid; min_value: string; max_value: string };
};
export type WeaponUid = typeof WeaponUidEnum[keyof typeof WeaponUidEnum];
