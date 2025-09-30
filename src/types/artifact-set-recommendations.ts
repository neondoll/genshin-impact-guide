import type { ArtifactSetId } from "./artifact-set";
import type { CharacterId } from "@/features/characters/types";
import type { StatId } from "@/features/stats/types";
import type { VideoSource } from "@/features/video-sources/types";
import { ArtifactSlotIds } from "@/enums/artifact-slot";

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
