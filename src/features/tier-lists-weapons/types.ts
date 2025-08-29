import type { VideoSource } from "../video-sources/types";
import type { WeaponId } from "../weapons/types";
import { TierListWeaponsTitles } from "./enums";

export interface TierListWeapons {
  title: TierListWeaponsTitle;
  list: TierListWeaponsListItem[];
  video_source: VideoSource;
}

export interface TierListWeaponsListItem {
  tier: string;
  description?: string;
  weapon_ids: WeaponId[];
}

export type TierListWeaponsTitle = typeof TierListWeaponsTitles[keyof typeof TierListWeaponsTitles];
