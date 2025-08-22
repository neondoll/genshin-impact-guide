import type { ArtifactSetRecommendations } from "../types";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { CharacterKeys } from "@/database/characters/enums";

export default {
  artifact_set_id: ArtifactSetIds.FragmentOfHarmonicWhimsy,
  characters: [
    {
      key: CharacterKeys.Arlecchino,
      is_better: true,
      notes: "Один из лучших комплектов для Арлекино, так как повышает важную силу атаки и увеличивает наносимый урон. Так как Арлекино сама накладывает на себя Долг жизни, она выполняет условие 4 предметов.",
    },
  ],
} as ArtifactSetRecommendations;
