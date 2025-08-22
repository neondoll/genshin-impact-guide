import type { ArtifactSetRecommendations } from "../types";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "@/database/artifact-slots/enums";
import { CharacterKeys } from "@/database/characters/enums";
import { StatKeys } from "@/database/stats/enums";
import { StatsCrit, StatsElementDamageBonus } from "./_help";

export default {
  artifact_set_id: ArtifactSetIds.Lavawalker,
  characters: [
    { key: CharacterKeys.Diluc },
    { key: CharacterKeys.HuTao },
    { key: CharacterKeys.Klee, is_better: true },
    { key: CharacterKeys.Lyney, is_better: true },
    { key: CharacterKeys.Yanfei },
    { key: CharacterKeys.Yoimiya },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StatKeys.AtkPercentage],
    [ArtifactSlotKeys.Goblet]: [...StatsElementDamageBonus, StatKeys.AtkPercentage],
    [ArtifactSlotKeys.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatKeys.AtkPercentage, StatKeys.EnergyRecharge],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
