import type { ArtifactSetId } from "../artifact-sets/types";
import type { CharacterId } from "../characters/types";
import type { StatId } from "../stats/types";
import type { VideoSource } from "../video-sources/types";
import { ArtifactSlotIds } from "../artifact-slots/enums";

export interface ArtifactSetCharacterRecommendation {
  id: CharacterId;
  is_better?: boolean;
  notes?: string | string[];
}

export interface ArtifactSetRecommendations {
  artifact_set_id: ArtifactSetId;
  characters: ArtifactSetCharacterRecommendation[];
  preferred_stats?: Record<typeof ArtifactSlotIds["Sands" | "Goblet" | "Circlet"] | "additional", StatId[]>;
  video_sources?: VideoSource[];
}
