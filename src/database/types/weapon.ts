import { WeaponUidEnum } from "../enums/weapon";
import type { AttributeUid } from "./attribute";
import type { QualityUid } from "./quality";
import type { WeaponTypeUid } from "./weapon-type";

type WeaponAttributeValue = { min_value: string | number; max_value: string | number };

export type Weapon = {
  uid: WeaponUid;
  /* Имя                           */ name: string;
  /* Качество                      */ quality: QualityUid;
  /* Где найти                     */ source?: string;
  /* Тип                           */ type_uid: WeaponTypeUid;
  /* Базовая атака                 */ base_atk: WeaponAttributeValue;
  /* Дополнительные характеристики */ secondary_attributes?: WeaponAttributeValue & { uid: AttributeUid };
  image_src: string;
};
export type WeaponUid = typeof WeaponUidEnum[keyof typeof WeaponUidEnum];
