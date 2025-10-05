import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { CharacterIds } from "@/enums/character";

export default new ArtifactSetRecommendations(ArtifactSetIds.FinaleOfTheDeepGalleries)
  .setCharacters([new ArtifactSetCharacterRecommendation(CharacterIds.Skirk)]);
