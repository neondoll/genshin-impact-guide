import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { CharacterIds } from "@/enums/character";

export default ArtifactSetRecommendations.init([ArtifactSetIds.FinaleOfTheDeepGalleries, [
  new ArtifactSetCharacterRecommendation(CharacterIds.Skirk),
]]);
