import type { IArtifactSetRecommendations } from "../types";
import { ArtifactSetKeys } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "../../artifact-slots/enums";
import { CharacterKeys } from "../../characters/enums";
import { StatKeys } from "../../stats/enums";
import { StatsCrit, StatsElementDamageBonus } from "./_help.ts";

export default {
  artifact_set_key: ArtifactSetKeys.ThunderingFury,
  characters: [
    { key: CharacterKeys.Cyno, is_better: true },
    { key: CharacterKeys.Fischl },
    { key: CharacterKeys.Keqing, is_better: true },
    { key: CharacterKeys.YaeMiko },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StatKeys.AtkPercentage, StatKeys.ElementalMastery],
    [ArtifactSlotKeys.Goblet]: [
      ...StatsElementDamageBonus, StatKeys.AtkPercentage, StatKeys.ElementalMastery,
    ],
    [ArtifactSlotKeys.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatKeys.AtkPercentage, StatKeys.ElementalMastery, StatKeys.EnergyRecharge],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as IArtifactSetRecommendations;
