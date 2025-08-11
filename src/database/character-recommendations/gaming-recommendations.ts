import { CharacterKeys } from "../enums/character";
import { WeaponKeys } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  character_key: CharacterKeys.Gaming,
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
  ],
  weapons: [
    { key: WeaponKeys.SerpentSpine, refinement: 5, is_better: true },
    { key: WeaponKeys.RedhornStonethresher, refinement: 1 },
    { key: WeaponKeys.WolfsGravestone, refinement: 1 },
  ],
} as CharacterRecommendations;
