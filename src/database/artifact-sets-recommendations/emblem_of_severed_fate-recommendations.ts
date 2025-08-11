import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StAtkeys } from "../enums/stat";
import { StatsCrit, StatsElementDamageBonus } from "./help";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_key: ArtifactSetKeys.EmblemOfSeveredFate,
  characters: [
    { key: CharacterKeys.Chevreuse, is_better: true },
    { key: CharacterKeys.Ganyu },
    { key: CharacterKeys.Mona },
    { key: CharacterKeys.RaidenShogun, is_better: true },
    { key: CharacterKeys.Shenhe },
    { key: CharacterKeys.Xiangling, is_better: true },
    { key: CharacterKeys.Xingqiu, is_better: true },
    { key: CharacterKeys.Yelan, is_better: true },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [
      StAtkeys.AtkPercentage, StAtkeys.ElementalMastery, StAtkeys.EnergyRecharge, StAtkeys.HpPercentage,
    ],
    [ArtifactSlotKeys.Goblet]: [...StatsElementDamageBonus, StAtkeys.AtkPercentage, StAtkeys.HpPercentage],
    [ArtifactSlotKeys.Circlet]: [...StatsCrit, StAtkeys.HpPercentage],
    additional: [...StatsCrit, StAtkeys.AtkPercentage, StAtkeys.ElementalMastery, StAtkeys.EnergyRecharge],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
