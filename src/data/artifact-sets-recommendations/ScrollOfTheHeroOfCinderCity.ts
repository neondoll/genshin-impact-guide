import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { CharacterIds } from "@/enums/character";

export default ArtifactSetRecommendations.init([ArtifactSetIds.ScrollOfTheHeroOfCinderCity, [
  new ArtifactSetCharacterRecommendation(CharacterIds.Chevreuse),
  new ArtifactSetCharacterRecommendation(CharacterIds.Iansan),
  new ArtifactSetCharacterRecommendation(CharacterIds.Xilonen),
]]);
