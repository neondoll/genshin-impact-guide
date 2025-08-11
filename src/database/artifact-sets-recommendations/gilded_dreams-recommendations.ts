import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StatKeys } from "../enums/stat";
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
    [ArtifactSlotKeys.SandsOfEon]: [StatKeys.ATKPercentage, StatKeys.ElementalMastery],
    [ArtifactSlotKeys.GobletOfEonothem]: [...StatsElementDamageBonus, StatKeys.ElementalMastery],
    [ArtifactSlotKeys.CircletOfLogos]: [...StatsCrit, StatKeys.ElementalMastery],
    additional: [
      ...StatsCrit, StatKeys.ATKPercentage, StatKeys.ElementalMastery, StatKeys.EnergyRecharge, StatKeys.HPPercentage,
    ],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
