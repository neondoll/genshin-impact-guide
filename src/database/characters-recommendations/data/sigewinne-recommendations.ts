import type { ICharacterRecommendations } from "../types";
import { CharacterKeys } from "../../characters/enums";
import { WeaponKeys } from "../../weapons/enums";

export default {
  character_key: CharacterKeys.Sigewinne,
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
  ],
  weapons: [
    { key: WeaponKeys.SilvershowerHeartstrings, refinement: 1, is_better: true },
    { key: WeaponKeys.SacrificialBow, refinement: 5 },
  ],
} as ICharacterRecommendations;
