import type { IArtifactSetRecommendations } from "../types";
import { ArtifactSetKeys } from "../../artifact-sets/enums";
import { CharacterKeys } from "../../characters/enums";

export default {
  artifact_set_key: ArtifactSetKeys.LongNightsOath,
  characters: [
    {
      key: CharacterKeys.Varesa,
      notes: "Варесе будет очень полезно увеличение урона атак в падении, которые она использует. Поскольку она часто активирует элементальный навык, а также заряженную атаку и атаку в падении после навыка, она может получить максимальный бонус урона.",
    },
  ],
} as IArtifactSetRecommendations;
