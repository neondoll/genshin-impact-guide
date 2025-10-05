import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { CharacterIds } from "@/enums/character";

export default new ArtifactSetRecommendations(ArtifactSetIds.ObsidianCodex)
  .setCharacters([new ArtifactSetCharacterRecommendation(CharacterIds.Varesa)]);
