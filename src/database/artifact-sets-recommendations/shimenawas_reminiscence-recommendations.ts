import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StatKeys } from "../enums/stat";
import { StatsCrit, StatsElementDamageBonus } from "./help";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_key: ArtifactSetKeys.ShimenawasReminiscence,
  characters: [
    { key: CharacterKeys.Ganyu, is_better: true },
    { key: CharacterKeys.HuTao, is_better: true },
    { key: CharacterKeys.Wanderer, is_better: true },
    { key: CharacterKeys.Wriothesley, is_better: true },
    { key: CharacterKeys.Yoimiya, is_better: true },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.SandsOfEon]: [StatKeys.ATKPercentage, StatKeys.ElementalMastery, StatKeys.HPPercentage],
    [ArtifactSlotKeys.GobletOfEonothem]: [...StatsElementDamageBonus, StatKeys.ATKPercentage],
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
