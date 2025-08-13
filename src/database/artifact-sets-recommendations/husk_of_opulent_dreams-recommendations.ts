import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StatKeys } from "../enums/stat";
import { StatsCrit } from "./help";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_key: ArtifactSetKeys.HuskOfOpulentDreams,
  characters: [
    { key: CharacterKeys.Albedo },
    { key: CharacterKeys.AratakiItto, is_better: true },
    { key: CharacterKeys.Noelle, is_better: true },
    { key: CharacterKeys.YunJin },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StatKeys.DefPercentage],
    [ArtifactSlotKeys.Goblet]: [StatKeys.DefPercentage, StatKeys.GeoDmgBonus],
    [ArtifactSlotKeys.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatKeys.DefPercentage, StatKeys.EnergyRecharge],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
