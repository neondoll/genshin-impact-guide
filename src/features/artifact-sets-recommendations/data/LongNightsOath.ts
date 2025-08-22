import type { ArtifactSetRecommendations } from "../types";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { CharacterKeys } from "@/database/characters/enums";

export default {
  artifact_set_id: ArtifactSetIds.LongNightsOath,
  characters: [
    {
      key: CharacterKeys.Varesa,
      notes: "Варесе будет очень полезно увеличение урона атак в падении, которые она использует. Поскольку она часто активирует элементальный навык, а также заряженную атаку и атаку в падении после навыка, она может получить максимальный бонус урона.",
    },
  ],
} as ArtifactSetRecommendations;
