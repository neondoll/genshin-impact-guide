import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StatKeys } from "../enums/stat";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_key: ArtifactSetKeys.Instructor,
  characters: [
    { key: CharacterKeys.Bennett, is_better: true },
    { key: CharacterKeys.Collei },
    { key: CharacterKeys.Kirara },
    { key: CharacterKeys.KukiShinobu },
    { key: CharacterKeys.Mona, is_better: true },
    { key: CharacterKeys.Sucrose, is_better: true },
    { key: CharacterKeys.Zhongli, is_better: true },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StatKeys.ElementalMastery, StatKeys.EnergyRecharge, StatKeys.HpPercentage],
    [ArtifactSlotKeys.Goblet]: [StatKeys.ElementalMastery, StatKeys.HpPercentage],
    [ArtifactSlotKeys.Circlet]: [StatKeys.ElementalMastery, StatKeys.HpPercentage],
    additional: [StatKeys.ElementalMastery, StatKeys.EnergyRecharge, StatKeys.HpPercentage],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
