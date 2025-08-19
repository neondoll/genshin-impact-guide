import type { IArtifactSetRecommendations } from "../types";
import { ArtifactSetKeys } from "../../artifact-sets/enums";
import { CharacterKeys } from "../../characters/enums";

export default {
  artifact_set_key: ArtifactSetKeys.ObsidianCodex,
  characters: [{ key: CharacterKeys.Varesa }],
} as IArtifactSetRecommendations;
