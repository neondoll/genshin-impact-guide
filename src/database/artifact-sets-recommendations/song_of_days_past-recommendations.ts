import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StatKeys } from "../enums/stat";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_key: ArtifactSetKeys.SongOfDaysPast,
  characters: [
    { key: CharacterKeys.Barbara, is_better: true },
    { key: CharacterKeys.SangonomiyaKokomi, is_better: true },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.SandsOfEon]: [StatKeys.HPPercentage],
    [ArtifactSlotKeys.GobletOfEonothem]: [StatKeys.HPPercentage],
    [ArtifactSlotKeys.CircletOfLogos]: [StatKeys.HealingBonus, StatKeys.HPPercentage],
    additional: [StatKeys.EnergyRecharge, StatKeys.HPPercentage],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
