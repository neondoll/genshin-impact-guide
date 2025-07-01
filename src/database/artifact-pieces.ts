import { ArtifactPieceUidEnum } from "./enums/artifact-pieces";
import type { ArtifactPieces } from "./types/artifact-pieces";

export const artifactPieces = {
  [ArtifactPieceUidEnum.FlowerOfLife]: { uid: ArtifactPieceUidEnum.FlowerOfLife, name: "Цветок жизни" },
  [ArtifactPieceUidEnum.PlumeOfDeath]: { uid: ArtifactPieceUidEnum.PlumeOfDeath, name: "Перо смерти" },
  [ArtifactPieceUidEnum.SandsOfEon]: { uid: ArtifactPieceUidEnum.SandsOfEon, name: "Пески времени" },
  [ArtifactPieceUidEnum.GobletOfEonothem]: { uid: ArtifactPieceUidEnum.GobletOfEonothem, name: "Кубок пространства" },
  [ArtifactPieceUidEnum.CircletOfLogos]: { uid: ArtifactPieceUidEnum.CircletOfLogos, name: "Корона разума" },
} as ArtifactPieces;
