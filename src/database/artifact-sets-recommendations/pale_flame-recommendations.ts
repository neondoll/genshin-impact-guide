import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StatKeys } from "../enums/stat";
import { StatsCrit } from "./help";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_key: ArtifactSetKeys.PaleFlame,
  characters: [
    { key: CharacterKeys.Eula, is_better: true },
    { key: CharacterKeys.Freminet },
    { key: CharacterKeys.Razor },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.SandsOfEon]: [StatKeys.ATKPercentage],
    [ArtifactSlotKeys.GobletOfEonothem]: [StatKeys.ATKPercentage, StatKeys.PhysicalDMGBonus],
    [ArtifactSlotKeys.CircletOfLogos]: StatsCrit,
    additional: [...StatsCrit, StatKeys.ATKPercentage],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
