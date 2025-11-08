import type { ARTIFACT_SLOTS } from "@/constants/artifact-slots";
import type { ArtifactSetId } from "./artifact-set";
import type { CharacterId } from "./character";
import type { StatId } from "./stat";
import type { VideoSourceId } from "./video-source";

export interface ArtifactSetCharacterRecommendation {
  id: CharacterId;
  is_better?: boolean;
  notes?: string | string[];
}

export interface ArtifactSetRecommendations {
  artifact_set_id: ArtifactSetId;
  characters?: ArtifactSetCharacterRecommendation[];
  preferred_stats?: Record<typeof ARTIFACT_SLOTS["SANDS" | "GOBLET" | "CIRCLET"] | "additional", StatId[]>;
  video_source_ids?: VideoSourceId[];
}
