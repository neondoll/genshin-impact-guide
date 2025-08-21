import type { IVideoSource } from "../video-sources/types";
import type { TWeaponKey } from "../weapons/types";
import { TierListWeaponsKeys } from "./enums";

export interface ITierListWeapons {
  key: TTierListWeaponsKey;
  list: ITierListWeaponsListItem[];
  video_source: IVideoSource;
}

export interface ITierListWeaponsListItem {
  tier: string;
  description?: string;
  weapon_keys: TWeaponKey[];
}

export type TTierListWeaponsKey = typeof TierListWeaponsKeys[keyof typeof TierListWeaponsKeys];
