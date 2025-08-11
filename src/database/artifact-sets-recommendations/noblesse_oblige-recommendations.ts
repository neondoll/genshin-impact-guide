import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StatKeys } from "../enums/stat";
import { StatsCrit, StatsElementDamageBonus } from "./help";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_key: ArtifactSetKeys.NoblesseOblige,
  characters: [
    { key: CharacterKeys.Bennett, is_better: true },
    { key: CharacterKeys.Charlotte, is_better: true },
    { key: CharacterKeys.Chevreuse, is_better: true },
    { key: CharacterKeys.Ganyu, is_better: true },
    { key: CharacterKeys.Gorou, is_better: true },
    { key: CharacterKeys.Jean, is_better: true },
    { key: CharacterKeys.KujouSara, is_better: true },
    { key: CharacterKeys.Mona, is_better: true },
    { key: CharacterKeys.Shenhe, is_better: true },
    { key: CharacterKeys.Xingqiu, is_better: true },
    { key: CharacterKeys.Zhongli, is_better: true },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.SandsOfEon]: [StatKeys.ATKPercentage, StatKeys.EnergyRecharge, StatKeys.HPPercentage],
    [ArtifactSlotKeys.GobletOfEonothem]: [...StatsElementDamageBonus, StatKeys.ATKPercentage, StatKeys.HPPercentage],
    [ArtifactSlotKeys.CircletOfLogos]: [...StatsCrit, StatKeys.HPPercentage],
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
