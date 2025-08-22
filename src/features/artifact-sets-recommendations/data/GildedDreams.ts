import type { ArtifactSetRecommendations } from "../types";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "@/database/artifact-slots/enums";
import { CharacterKeys } from "@/database/characters/enums";
import { StatKeys } from "@/database/stats/enums";
import { StatsCrit, StatsElementDamageBonus } from "./_help";

export default {
  artifact_set_id: ArtifactSetIds.GildedDreams,
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
    [ArtifactSlotKeys.Sands]: [StatKeys.AtkPercentage, StatKeys.ElementalMastery],
    [ArtifactSlotKeys.Goblet]: [...StatsElementDamageBonus, StatKeys.ElementalMastery],
    [ArtifactSlotKeys.Circlet]: [...StatsCrit, StatKeys.ElementalMastery],
    additional: [
      ...StatsCrit, StatKeys.AtkPercentage, StatKeys.ElementalMastery, StatKeys.EnergyRecharge, StatKeys.HpPercentage,
    ],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
