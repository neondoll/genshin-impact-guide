import type { ArtifactSetId } from "../artifact-sets/types";
import type { IVideoSource } from "@/database/video-sources/types";
import type { TCharacterKey } from "@/database/characters/types";
import type { TStatKey } from "@/database/stats/types";
import { ArtifactSlotKeys } from "@/database/artifact-slots/enums";

interface ArtifactSetCharacterRecommendation {
  key: TCharacterKey;
  is_better?: boolean;
  notes?: string | string[];
}

export interface ArtifactSetRecommendations {
  artifact_set_id: ArtifactSetId;
  characters: ArtifactSetCharacterRecommendation[];
  preferred_stats?: Record<typeof ArtifactSlotKeys["Sands" | "Goblet" | "Circlet"] | "additional", TStatKey[]>;
  video_sources?: IVideoSource[];
}
