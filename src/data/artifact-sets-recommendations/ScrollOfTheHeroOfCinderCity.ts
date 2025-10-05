import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { CharacterIds } from "@/enums/character";

export default new ArtifactSetRecommendations(ArtifactSetIds.ScrollOfTheHeroOfCinderCity)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Chevreuse),
    new ArtifactSetCharacterRecommendation(CharacterIds.Iansan),
    new ArtifactSetCharacterRecommendation(CharacterIds.Xilonen),
  ]);
