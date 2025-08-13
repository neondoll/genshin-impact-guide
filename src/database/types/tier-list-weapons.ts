import type { VideoSource } from "./video-source";
import type { WeaponKey } from "./weapon";

export interface TierListWeapons {
  list: TierListWeaponsListItem[];
  video_source: VideoSource;
}

export interface TierListWeaponsListItem {
  tier: string;
  description?: string;
  weapon_keys: WeaponKey[];
}
