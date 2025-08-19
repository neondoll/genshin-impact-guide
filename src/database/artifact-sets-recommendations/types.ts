import type { StatKey } from "../types/stat";
import type { TArtifactSetKey } from "../artifact-sets/types";
import type { TCharacterKey } from "../characters/types";
import type { VideoSource } from "../types/video-source";
import { ArtifactSlotKeys } from "../artifact-slots/enums";

export interface IArtifactSetCharacterRecommendation {
  key: TCharacterKey;
  is_better?: boolean;
  notes?: string | string[];
}

export interface IArtifactSetRecommendations {
  artifact_set_key: TArtifactSetKey;
  characters: IArtifactSetCharacterRecommendation[];
  preferred_stats: Record<typeof ArtifactSlotKeys["Sands" | "Goblet" | "Circlet"] | "additional", StatKey[]>;
  video_sources?: VideoSource[];
}
