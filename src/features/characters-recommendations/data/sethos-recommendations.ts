import type { CharacterRecommendations } from "@/features/characters-recommendations/types";
import { CharacterIds } from "../../characters/enums";
import { WeaponKeys } from "@/database/weapons/enums";

export default {
  character_key: CharacterIds.Sethos,
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
  ],
  weapons: [{ key: WeaponKeys.HuntersPath, refinement: 1, is_better: true }],
} as CharacterRecommendations;
