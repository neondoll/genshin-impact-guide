import { CharacterUidEnum } from "../enums/character";
import { WeaponUidEnum } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  character_uid: CharacterUidEnum.Sethos,
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
  ],
  weapons: [{ uid: WeaponUidEnum.HuntersPath, refinement: 1, is_better: true }],
} as CharacterRecommendations;
