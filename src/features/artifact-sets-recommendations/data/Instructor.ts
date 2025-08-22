import type { ArtifactSetRecommendations } from "../types";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "@/database/artifact-slots/enums";
import { CharacterKeys } from "@/database/characters/enums";
import { StatKeys } from "@/database/stats/enums";

export default {
  artifact_set_id: ArtifactSetIds.Instructor,
  characters: [
    { key: CharacterKeys.Bennett, is_better: true },
    { key: CharacterKeys.Collei },
    { key: CharacterKeys.Kirara },
    { key: CharacterKeys.KukiShinobu },
    { key: CharacterKeys.Mona, is_better: true },
    { key: CharacterKeys.Sucrose, is_better: true },
    { key: CharacterKeys.Zhongli, is_better: true },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StatKeys.ElementalMastery, StatKeys.EnergyRecharge, StatKeys.HpPercentage],
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
