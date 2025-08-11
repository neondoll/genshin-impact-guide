import type { VideoSource } from "./video-source";
import type { WeaponKey } from "./weapon";

export type TierListWeapons = {
  list: { tier: string; description?: string; weapon_keys: WeaponKey[] }[];
  video_source: VideoSource;
};
