import type { ArtifactSetRecommendations } from "../types";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "@/database/artifact-slots/enums";
import { CharacterKeys } from "@/database/characters/enums";
import { StatKeys } from "@/database/stats/enums";
import { StatsCrit, StatsElementDamageBonus } from "./_help";

export default {
  artifact_set_id: ArtifactSetIds.DeepwoodMemories,
  characters: [
    { key: CharacterKeys.Baizhu, is_better: true },
    { key: CharacterKeys.Nahida, is_better: true },
    { key: CharacterKeys.Yaoyao, is_better: true },
    { key: CharacterKeys.Zhongli, is_better: true },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StatKeys.ElementalMastery, StatKeys.EnergyRecharge, StatKeys.HpPercentage],
    [ArtifactSlotKeys.Goblet]: [...StatsElementDamageBonus, StatKeys.ElementalMastery, StatKeys.HpPercentage],
    [ArtifactSlotKeys.Circlet]: [...StatsCrit, StatKeys.ElementalMastery],
    additional: [...StatsCrit, StatKeys.ElementalMastery, StatKeys.EnergyRecharge, StatKeys.HpPercentage],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
