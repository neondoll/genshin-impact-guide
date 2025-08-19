import type { ICharacterRecommendations } from "../types";
import { CharacterKeys } from "../../characters/enums";
import { WeaponKeys } from "../../weapons/enums";

export default {
  character_key: CharacterKeys.Sethos,
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
  ],
  weapons: [{ key: WeaponKeys.HuntersPath, refinement: 1, is_better: true }],
} as ICharacterRecommendations;
