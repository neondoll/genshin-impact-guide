import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { CharacterIds } from "../../characters/enums";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.ScrollOfTheHeroOfCinderCity, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Chevreuse),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Iansan),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Xilonen),
]]);
