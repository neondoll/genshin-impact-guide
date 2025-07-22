import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import type { ArtifactSetUid } from "./artifact-set";
import type { AttributeUid } from "./attribute";
import type { CharacterUid } from "./character";
import type { VideoSource } from "./video-source";

export type ArtifactSetCharacterRecommendation = { uid: CharacterUid; is_better?: boolean; notes?: string };
export type ArtifactSetRecommendations = {
  artifact_set_uid: ArtifactSetUid;
  characters: ArtifactSetCharacterRecommendation[];
  preferred_attributes: Record<typeof ArtifactPieceUidEnum["SandsOfEon" | "GobletOfEonothem" | "CircletOfLogos"] | "additional", AttributeUid[]>;
  video_sources?: VideoSource[];
};
