import { ArtifactPieceUidEnum } from "../enums/artifact-piece";

export type ArtifactPiece = { uid: ArtifactPieceUid; name: string; image_src: string };
export type ArtifactPieceUid = typeof ArtifactPieceUidEnum[keyof typeof ArtifactPieceUidEnum];
