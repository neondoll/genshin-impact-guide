import type { ArtifactTypeUidEnum } from "../enums/artifact-types";

type ArtifactType = { name: string };

export type ArtifactTypes = Record<ArtifactTypeUid, ArtifactType>;
export type ArtifactTypeUid = typeof ArtifactTypeUidEnum[keyof typeof ArtifactTypeUidEnum];
