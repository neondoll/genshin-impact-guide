import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StatKeys } from "../enums/stat";
import { StatsCrit, StatsElementDamageBonus } from "./help";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_key: ArtifactSetKeys.Lavawalker,
  characters: [
    { key: CharacterKeys.Diluc },
    { key: CharacterKeys.HuTao },
    { key: CharacterKeys.Klee, is_better: true },
    { key: CharacterKeys.Lyney, is_better: true },
    { key: CharacterKeys.Yanfei },
    { key: CharacterKeys.Yoimiya },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.SandsOfEon]: [StatKeys.ATKPercentage],
    [ArtifactSlotKeys.GobletOfEonothem]: [...StatsElementDamageBonus, StatKeys.ATKPercentage],
    [ArtifactSlotKeys.CircletOfLogos]: StatsCrit,
    additional: [...StatsCrit, StatKeys.ATKPercentage, StatKeys.EnergyRecharge],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
