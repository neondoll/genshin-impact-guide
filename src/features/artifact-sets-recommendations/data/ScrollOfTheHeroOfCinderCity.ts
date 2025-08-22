import type { ArtifactSetRecommendations } from "../types";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { CharacterKeys } from "@/database/characters/enums";

export default {
  artifact_set_id: ArtifactSetIds.ScrollOfTheHeroOfCinderCity,
  characters: [{ key: CharacterKeys.Chevreuse }, { key: CharacterKeys.Iansan }, { key: CharacterKeys.Xilonen }],
} as ArtifactSetRecommendations;
