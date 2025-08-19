import type { IArtifactSetRecommendations } from "../types";
import { ArtifactSetKeys } from "../../artifact-sets/enums";
import { CharacterKeys } from "../../characters/enums";

export default {
  artifact_set_key: ArtifactSetKeys.ScrollOfTheHeroOfCinderCity,
  characters: [{ key: CharacterKeys.Chevreuse }, { key: CharacterKeys.Iansan }, { key: CharacterKeys.Xilonen }],
} as IArtifactSetRecommendations;
