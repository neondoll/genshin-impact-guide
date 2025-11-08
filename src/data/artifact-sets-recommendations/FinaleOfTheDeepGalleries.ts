import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { CharacterIds } from "@/enums/character";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.FINALE_OF_THE_DEEP_GALLERIES)
  .setCharacters([new ArtifactSetCharacterRecommendation(CharacterIds.Skirk)]);
