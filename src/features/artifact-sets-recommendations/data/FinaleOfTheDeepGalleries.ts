import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { CharacterIds } from "../../characters/enums";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.FinaleOfTheDeepGalleries, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Skirk),
]]);
