import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { CharacterIds } from "../../characters/enums";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.ObsidianCodex, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Varesa),
]]);
