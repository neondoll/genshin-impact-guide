import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StAtkeys } from "../enums/stat";
import { StatsCrit, StatsElementDamageBonus } from "./help";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_key: ArtifactSetKeys.GildedDreams,
  characters: [
    { key: CharacterKeys.Alhaitham, is_better: true },
    { key: CharacterKeys.Cyno, is_better: true },
    { key: CharacterKeys.Keqing },
    { key: CharacterKeys.KukiShinobu },
    { key: CharacterKeys.Nahida, is_better: true },
    { key: CharacterKeys.RaidenShogun },
    { key: CharacterKeys.Tighnari, is_better: true },
    { key: CharacterKeys.YaeMiko, is_better: true },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StAtkeys.AtkPercentage, StAtkeys.ElementalMastery],
    [ArtifactSlotKeys.Goblet]: [...StatsElementDamageBonus, StAtkeys.ElementalMastery],
    [ArtifactSlotKeys.Circlet]: [...StatsCrit, StAtkeys.ElementalMastery],
    additional: [
      ...StatsCrit, StAtkeys.AtkPercentage, StAtkeys.ElementalMastery, StAtkeys.EnergyRecharge, StAtkeys.HpPercentage,
    ],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
