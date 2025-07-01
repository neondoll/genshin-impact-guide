import type { ArtifactPieceUidEnum } from "../enums/artifact-pieces";

type ArtifactPiece = { uid: ArtifactPieceUid; name: string };

export type ArtifactPieces = Record<ArtifactPieceUid, ArtifactPiece>;
export type ArtifactPieceUid = typeof ArtifactPieceUidEnum[keyof typeof ArtifactPieceUidEnum];
