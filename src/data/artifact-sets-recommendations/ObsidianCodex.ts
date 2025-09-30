import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { CharacterIds } from "@/features/characters/enums";

export default ArtifactSetRecommendations.init([ArtifactSetIds.ObsidianCodex, [
  new ArtifactSetCharacterRecommendation(CharacterIds.Varesa),
]]);
