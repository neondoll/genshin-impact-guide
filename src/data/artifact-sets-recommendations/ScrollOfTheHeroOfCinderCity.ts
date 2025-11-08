import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { CharacterIds } from "@/enums/character";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.SCROLL_OF_THE_HERO_OF_CINDER_CITY)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Chevreuse),
    new ArtifactSetCharacterRecommendation(CharacterIds.Iansan),
    new ArtifactSetCharacterRecommendation(CharacterIds.Xilonen),
  ]);
