import type { IArtifactSetRecommendations } from "../types";
import { ArtifactSetKeys } from "../../artifact-sets/enums";
import { CharacterKeys } from "../../characters/enums";

export default {
  artifact_set_key: ArtifactSetKeys.FinaleOfTheDeepGalleries,
  characters: [{ key: CharacterKeys.Skirk }],
} as IArtifactSetRecommendations;
