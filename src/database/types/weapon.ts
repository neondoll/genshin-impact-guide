import { WeaponUidEnum } from "../enums/weapon";
import type { AttributeUid } from "./attribute";
import type { QualityUid } from "./quality";
import type { WeaponTypeUid } from "./weapon-type";

export type Weapon = {
  uid: WeaponUid;
  /* Имя       */ name: string;
  image_src: string;
  /* Где найти */ source?: string;
  /* Тип       */ type_uid: WeaponTypeUid;
  quality: QualityUid;
  base_atk: { min_value: string | number; max_value: string | number };
  secondary_attributes: { uid: AttributeUid; min_value: string | number; max_value: string | number };
};
export type WeaponUid = typeof WeaponUidEnum[keyof typeof WeaponUidEnum];
