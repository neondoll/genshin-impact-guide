import { CharacterKeys } from "../characters/enums";
import { WeaponKeys } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  character_key: CharacterKeys.Kachina,
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
  ],
  weapons: [{ key: WeaponKeys.FavoniusLance, refinement: 5, is_better: true }],
} as CharacterRecommendations;
