import type { VideoSource } from "./video-source";
import type { WeaponUid } from "./weapon";

export type TierListWeapons = {
  list: { tier: string; description?: string; weapon_uids: WeaponUid[] }[];
  video_source: VideoSource;
};
