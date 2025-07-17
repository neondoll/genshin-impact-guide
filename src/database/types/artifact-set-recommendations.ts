import type { ArtifactSetUid } from "./artifact-set";
import type { CharacterUid } from "./character";
import type { VideoSource } from "./video-source";

export type ArtifactSetCharacterRecommendation = { uid: CharacterUid; is_better?: boolean; notes?: string };
export type ArtifactSetRecommendations = {
  artifact_set_uid: ArtifactSetUid;
  characters: ArtifactSetCharacterRecommendation[];
  video_sources: VideoSource[];
};
