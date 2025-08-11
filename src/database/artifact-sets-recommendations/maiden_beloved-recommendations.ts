import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StAtkeys } from "../enums/stat";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_key: ArtifactSetKeys.MaidenBeloved,
  characters: [
    { key: CharacterKeys.Barbara, is_better: true },
    { key: CharacterKeys.Jean, is_better: true },
    { key: CharacterKeys.Qiqi },
    { key: CharacterKeys.SangonomiyaKokomi, is_better: true },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StAtkeys.AtkPercentage, StAtkeys.EnergyRecharge, StAtkeys.HpPercentage],
    [ArtifactSlotKeys.Goblet]: [StAtkeys.AtkPercentage, StAtkeys.EnergyRecharge, StAtkeys.HpPercentage],
    [ArtifactSlotKeys.Circlet]: [StAtkeys.AtkPercentage, StAtkeys.Heal, StAtkeys.HpPercentage],
    additional: [StAtkeys.AtkPercentage, StAtkeys.EnergyRecharge, StAtkeys.HpPercentage],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
