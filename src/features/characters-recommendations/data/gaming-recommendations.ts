import type { CharacterRecommendations } from "@/features/characters-recommendations/types";
import { CharacterIds } from "../../characters/enums";
import { WeaponKeys } from "@/database/weapons/enums";

export default {
  character_key: CharacterIds.Gaming,
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
  ],
  weapons: [
    { key: WeaponKeys.SerpentSpine, refinement: 5, is_better: true },
    { key: WeaponKeys.RedhornStonethresher, refinement: 1 },
    { key: WeaponKeys.WolfsGravestone, refinement: 1 },
  ],
} as CharacterRecommendations;
