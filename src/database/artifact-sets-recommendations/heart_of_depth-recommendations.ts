import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StatKeys } from "../enums/stat";
import { StatsCrit, StatsElementDamageBonus } from "./help";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_key: ArtifactSetKeys.HeartOfDepth,
  characters: [
    { key: CharacterKeys.KamisatoAyato, is_better: true },
    { key: CharacterKeys.Neuvillette, is_better: true },
    { key: CharacterKeys.Tartaglia, is_better: true },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.SandsOfEon]: [StatKeys.ATKPercentage, StatKeys.ElementalMastery, StatKeys.HPPercentage],
    [ArtifactSlotKeys.GobletOfEonothem]: [...StatsElementDamageBonus, StatKeys.ATKPercentage, StatKeys.HPPercentage],
    [ArtifactSlotKeys.CircletOfLogos]: StatsCrit,
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
