import type { ArtifactSetRecommendations } from "../types";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "@/database/artifact-slots/enums";
import { CharacterKeys } from "@/database/characters/enums";
import { StatKeys } from "@/database/stats/enums";
import { StatsCrit } from "./_help";

export default {
  artifact_set_id: ArtifactSetIds.PaleFlame,
  characters: [
    { key: CharacterKeys.Eula, is_better: true },
    { key: CharacterKeys.Freminet },
    { key: CharacterKeys.Razor },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StatKeys.AtkPercentage],
    [ArtifactSlotKeys.Goblet]: [StatKeys.AtkPercentage, StatKeys.PhysicalDmgBonus],
    [ArtifactSlotKeys.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatKeys.AtkPercentage],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
