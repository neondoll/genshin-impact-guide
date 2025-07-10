import { ArtifactPieceUidEnum } from "../enums/artifact-piece";

export type ArtifactPiece = { uid: ArtifactPieceUid; name: string; image_src: string; sort_by: number };
export type ArtifactPieceUid = typeof ArtifactPieceUidEnum[keyof typeof ArtifactPieceUidEnum];
