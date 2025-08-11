import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StatKeys } from "../enums/stat";
import { StatsCrit } from "./help";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_key: ArtifactSetKeys.ArchaicPetra,
  characters: [
    { key: CharacterKeys.Albedo },
    { key: CharacterKeys.Ningguang, is_better: true },
    { key: CharacterKeys.Noelle, is_better: true },
    { key: CharacterKeys.YunJin },
    { key: CharacterKeys.Zhongli, is_better: true },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.SandsOfEon]: [StatKeys.DefensePercent, StatKeys.EnergyRecharge, StatKeys.HPPercentage],
    [ArtifactSlotKeys.GobletOfEonothem]: [StatKeys.DefensePercent, StatKeys.HPPercentage],
    [ArtifactSlotKeys.CircletOfLogos]: [...StatsCrit, StatKeys.HPPercentage],
    additional: [...StatsCrit, StatKeys.ATKPercentage, StatKeys.ElementalMastery, StatKeys.EnergyRecharge],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
