import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { CharacterIds } from "@/enums/character";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.OBSIDIAN_CODEX)
  .setCharacters([new ArtifactSetCharacterRecommendation(CharacterIds.Varesa)]);
