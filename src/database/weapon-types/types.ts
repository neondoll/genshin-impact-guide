import { WeaponTypeKeys } from "./enums";

export interface IWeaponType {
  key: TWeaponTypeKey;
  name: string;
  abbr: string;
  image_src: string;
  icon_src: string;
}

export type TWeaponTypeKey = typeof WeaponTypeKeys[keyof typeof WeaponTypeKeys];
