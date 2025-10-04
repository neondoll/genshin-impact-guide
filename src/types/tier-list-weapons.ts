import type { VideoSource } from "./video-source";
import type { WeaponId } from "./weapon";
import { TierListWeaponsTitles } from "@/enums/tier-list-weapons";

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
