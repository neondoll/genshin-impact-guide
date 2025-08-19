import type { IVideoSource } from "../video-sources/types";
import type { TWeaponKey } from "../weapons/types";

export interface ITierListWeapons {
  list: ITierListWeaponsListItem[];
  video_source: IVideoSource;
}

export interface ITierListWeaponsListItem {
  tier: string;
  description?: string;
  weapon_keys: TWeaponKey[];
}
