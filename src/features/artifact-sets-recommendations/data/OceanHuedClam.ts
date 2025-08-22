import type { ArtifactSetRecommendations } from "../types";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "@/database/artifact-slots/enums";
import { CharacterKeys } from "@/database/characters/enums";
import { StatKeys } from "@/database/stats/enums";

export default {
  artifact_set_id: ArtifactSetIds.OceanHuedClam,
  characters: [
    { key: CharacterKeys.Baizhu },
    { key: CharacterKeys.Barbara, is_better: true },
    { key: CharacterKeys.Jean },
    { key: CharacterKeys.SangonomiyaKokomi, is_better: true },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StatKeys.EnergyRecharge, StatKeys.HpPercentage],
    [ArtifactSlotKeys.Goblet]: [StatKeys.EnergyRecharge, StatKeys.HpPercentage],
    [ArtifactSlotKeys.Circlet]: [StatKeys.Heal, StatKeys.HpPercentage],
    additional: [StatKeys.EnergyRecharge, StatKeys.HpPercentage],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
