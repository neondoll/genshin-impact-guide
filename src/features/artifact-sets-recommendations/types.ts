import type { ArtifactSetId } from "../artifact-sets/types";
import type { CharacterId } from "../characters/types";
import type { IVideoSource } from "@/database/video-sources/types";
import type { TStatKey } from "@/database/stats/types";
import { ArtifactSlotIds } from "../artifact-slots/enums";

export interface ArtifactSetCharacterRecommendation {
  id: CharacterId;
  is_better?: boolean;
  notes?: string | string[];
}

export interface ArtifactSetRecommendations {
  artifact_set_id: ArtifactSetId;
  characters: ArtifactSetCharacterRecommendation[];
  preferred_stats?: Record<typeof ArtifactSlotIds["Sands" | "Goblet" | "Circlet"] | "additional", TStatKey[]>;
  video_sources?: IVideoSource[];
}
