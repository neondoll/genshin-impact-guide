import type { ArtifactSetRecommendations } from "../types";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "@/database/artifact-slots/enums";
import { CharacterKeys } from "@/database/characters/enums";
import { StatKeys } from "@/database/stats/enums";

export default {
  artifact_set_id: ArtifactSetIds.FlowerOfParadiseLost,
  characters: [
    { key: CharacterKeys.KukiShinobu, is_better: true },
    { key: CharacterKeys.Nilou, is_better: true },
    { key: CharacterKeys.RaidenShogun, is_better: true },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StatKeys.ElementalMastery, StatKeys.HpPercentage],
    [ArtifactSlotKeys.Goblet]: [StatKeys.ElementalMastery, StatKeys.HpPercentage],
    [ArtifactSlotKeys.Circlet]: [StatKeys.ElementalMastery, StatKeys.HpPercentage],
    additional: [StatKeys.ElementalMastery, StatKeys.EnergyRecharge, StatKeys.HpPercentage],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
