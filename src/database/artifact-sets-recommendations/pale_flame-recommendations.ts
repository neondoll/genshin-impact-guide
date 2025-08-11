import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StAtkeys } from "../enums/stat";
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
    [ArtifactSlotKeys.Sands]: [StAtkeys.AtkPercentage],
    [ArtifactSlotKeys.Goblet]: [StAtkeys.AtkPercentage, StAtkeys.PhysicalDmgBonus],
    [ArtifactSlotKeys.Circlet]: StatsCrit,
    additional: [...StatsCrit, StAtkeys.AtkPercentage],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
