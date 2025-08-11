import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StAtkeys } from "../enums/stat";
import { StatsCrit, StatsElementDamageBonus } from "./help";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_key: ArtifactSetKeys.DeepwoodMemories,
  characters: [
    { key: CharacterKeys.Baizhu, is_better: true },
    { key: CharacterKeys.Nahida, is_better: true },
    { key: CharacterKeys.Yaoyao, is_better: true },
    { key: CharacterKeys.Zhongli, is_better: true },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StAtkeys.ElementalMastery, StAtkeys.EnergyRecharge, StAtkeys.HpPercentage],
    [ArtifactSlotKeys.Goblet]: [...StatsElementDamageBonus, StAtkeys.ElementalMastery, StAtkeys.HpPercentage],
    [ArtifactSlotKeys.Circlet]: [...StatsCrit, StAtkeys.ElementalMastery],
    additional: [...StatsCrit, StAtkeys.ElementalMastery, StAtkeys.EnergyRecharge, StAtkeys.HpPercentage],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
