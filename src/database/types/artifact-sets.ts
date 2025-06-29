import type { ArtifactSetUidEnum } from "../enums/artifact-sets";
import type { ArtifactTypeUid } from "./artifact-types";
import type { QualityUid } from "./qualities";

type ArtifactSet = { name: string; qualities: QualityUid[] }
  & Record<ArtifactTypeUid, { name: string; image_src: string }>;

export type ArtifactSets = Record<ArtifactSetUid, ArtifactSet>;
export type ArtifactSetUid = typeof ArtifactSetUidEnum[keyof typeof ArtifactSetUidEnum];
