import { CharacterUidEnum } from "../enums/character";
import { WeaponUidEnum } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  character_uid: CharacterUidEnum.Gaming,
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
  ],
  weapons: [
    { uid: WeaponUidEnum.SerpentSpine, refinement: 5, is_better: true },
    { uid: WeaponUidEnum.RedhornStonethresher, refinement: 1 },
    { uid: WeaponUidEnum.WolfsGravestone, refinement: 1 },
  ],
} as CharacterRecommendations;
