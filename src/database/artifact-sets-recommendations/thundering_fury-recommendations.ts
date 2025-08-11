import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StAtkeys } from "../enums/stat";
import { StatsCrit, StatsElementDamageBonus } from "./help";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_key: ArtifactSetKeys.ThunderingFury,
  characters: [
    { key: CharacterKeys.Cyno, is_better: true },
    { key: CharacterKeys.Fischl },
    { key: CharacterKeys.Keqing, is_better: true },
    { key: CharacterKeys.YaeMiko },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StAtkeys.AtkPercentage, StAtkeys.ElementalMastery],
    [ArtifactSlotKeys.Goblet]: [
      ...StatsElementDamageBonus, StAtkeys.AtkPercentage, StAtkeys.ElementalMastery,
    ],
    [ArtifactSlotKeys.Circlet]: StatsCrit,
    additional: [...StatsCrit, StAtkeys.AtkPercentage, StAtkeys.ElementalMastery, StAtkeys.EnergyRecharge],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
