import { WeaponTypeIds } from "./enums";

export interface WeaponType {
  id: WeaponTypeId;
  name: string;
  abbr: string;
  image_src: string;
  icon_src: string;
}

export type WeaponTypeId = typeof WeaponTypeIds[keyof typeof WeaponTypeIds];
