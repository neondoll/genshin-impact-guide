import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/constants/artifact-sets";
import { CharacterIds } from "@/enums/character";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.FRAGMENT_OF_HARMONIC_WHIMSY)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Arlecchino).setIsBetter().setNotes([
      "Один из лучших комплектов для Арлекино, так как повышает важную силу атаки и увеличивает наносимый урон. Так "
      + "как Арлекино сама накладывает на себя Долг жизни, она выполняет условие 4 предметов.",
    ]),
  ]);
