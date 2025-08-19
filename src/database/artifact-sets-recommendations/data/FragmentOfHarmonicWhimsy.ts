import type { IArtifactSetRecommendations } from "../types";
import { ArtifactSetKeys } from "../../artifact-sets/enums";
import { CharacterKeys } from "../../characters/enums";

export default {
  artifact_set_key: ArtifactSetKeys.FragmentOfHarmonicWhimsy,
  characters: [
    {
      key: CharacterKeys.Arlecchino,
      is_better: true,
      notes: "Один из лучших комплектов для Арлекино, так как повышает важную силу атаки и увеличивает наносимый урон. Так как Арлекино сама накладывает на себя Долг жизни, она выполняет условие 4 предметов.",
    },
  ],
} as IArtifactSetRecommendations;
