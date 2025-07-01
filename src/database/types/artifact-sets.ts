import type { ArtifactPieceUid } from "./artifact-pieces";
import type { ArtifactSetUidEnum } from "../enums/artifact-sets";
import type { QualityUid } from "./qualities";

type ArtifactSet = { uid: ArtifactSetUid; name: string; qualities: QualityUid[] }
  & Record<ArtifactPieceUid, { name: string; image_src: string }>;

export type ArtifactSets = Record<ArtifactSetUid, ArtifactSet>;
export type ArtifactSetUid = typeof ArtifactSetUidEnum[keyof typeof ArtifactSetUidEnum];
