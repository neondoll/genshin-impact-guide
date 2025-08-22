import type { ArtifactSetRecommendations } from "../types";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "@/database/artifact-slots/enums";
import { CharacterKeys } from "@/database/characters/enums";
import { StatKeys } from "@/database/stats/enums";
import { StatsCrit } from "./_help";

export default {
  artifact_set_id: ArtifactSetIds.HuskOfOpulentDreams,
  characters: [
    { key: CharacterKeys.Albedo },
    { key: CharacterKeys.AratakiItto, is_better: true },
    { key: CharacterKeys.Noelle, is_better: true },
    { key: CharacterKeys.YunJin },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StatKeys.DefPercentage],
    [ArtifactSlotKeys.Goblet]: [StatKeys.DefPercentage, StatKeys.GeoDmgBonus],
    [ArtifactSlotKeys.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatKeys.DefPercentage, StatKeys.EnergyRecharge],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
