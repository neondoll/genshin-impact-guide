import { CharacterUidEnum } from "../enums/character";
import { WeaponUidEnum } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  character_uid: CharacterUidEnum.Sigewinne,
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
  ],
  weapons: [
    { uid: WeaponUidEnum.SilvershowerHeartstrings, refinement: 1, is_better: true },
    { uid: WeaponUidEnum.SacrificialBow, refinement: 5 },
  ],
} as CharacterRecommendations;
