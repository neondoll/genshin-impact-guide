import type { WeaponUid } from "./weapon";

export type TierListWeapons = {
  list?: { tier: string; description: string; weapon_uids: WeaponUid[] }[];
  video_source?: { title: string; vk_url?: string; youtube_url?: string };
};
