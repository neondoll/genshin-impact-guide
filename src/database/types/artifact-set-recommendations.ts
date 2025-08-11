import { ArtifactSlotKeys } from "../enums/artifact-slot";
import type { ArtifactSetKey } from "./artifact-set";
import type { CharacterKey } from "./character";
import type { StatKey } from "./stat";
import type { VideoSource } from "./video-source";

export type ArtifactSetCharacterRecommendation = { key: CharacterKey; is_better?: boolean; notes?: string | string[] };
export type ArtifactSetRecommendations = {
  artifact_set_key: ArtifactSetKey;
  characters: ArtifactSetCharacterRecommendation[];
  preferred_stats: Record<typeof ArtifactSlotKeys["SandsOfEon" | "GobletOfEonothem" | "CircletOfLogos"] | "additional", StatKey[]>;
  video_sources?: VideoSource[];
};
