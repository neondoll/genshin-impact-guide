import type { IVideoSource } from "../video-sources/types";
import type { TArtifactSetKey } from "../artifact-sets/types";
import type { TCharacterKey } from "../characters/types";
import type { TStatKey } from "../stats/types";
import { ArtifactSlotKeys } from "../artifact-slots/enums";

export interface IArtifactSetCharacterRecommendation {
  key: TCharacterKey;
  is_better?: boolean;
  notes?: string | string[];
}

export interface IArtifactSetRecommendations {
  artifact_set_key: TArtifactSetKey;
  characters: IArtifactSetCharacterRecommendation[];
  preferred_stats?: Record<typeof ArtifactSlotKeys["Sands" | "Goblet" | "Circlet"] | "additional", TStatKey[]>;
  video_sources?: IVideoSource[];
}
