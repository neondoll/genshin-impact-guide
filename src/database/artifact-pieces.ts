import { ArtifactPieceUidEnum } from "./enums/artifact-piece";
import { publicImageSrc } from "@/lib/utils";
import type { ArtifactPiece, ArtifactPieceUid } from "./types/artifact-piece";

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`artifact-pieces/${src}`);

export default {
  [ArtifactPieceUidEnum.CircletOfLogos]: {
    uid: ArtifactPieceUidEnum.CircletOfLogos,
    name: "Корона разума",
    image_src: imageSrc("circlet_of_logos-64x64.png"),
    sort_by: 5,
  },
  [ArtifactPieceUidEnum.FlowerOfLife]: {
    uid: ArtifactPieceUidEnum.FlowerOfLife,
    name: "Цветок жизни",
    image_src: imageSrc("flower_of_life-64x64.png"),
    sort_by: 1,
  },
  [ArtifactPieceUidEnum.GobletOfEonothem]: {
    uid: ArtifactPieceUidEnum.GobletOfEonothem,
    name: "Кубок пространства",
    image_src: imageSrc("goblet_of_eonothem-64x64.png"),
    sort_by: 4,
  },
  [ArtifactPieceUidEnum.PlumeOfDeath]: {
    uid: ArtifactPieceUidEnum.PlumeOfDeath,
    name: "Перо смерти",
    image_src: imageSrc("plume_of_death-64x64.png"),
    sort_by: 2,
  },
  [ArtifactPieceUidEnum.SandsOfEon]: {
    uid: ArtifactPieceUidEnum.SandsOfEon,
    name: "Пески времени",
    image_src: imageSrc("sands_of_eon-64x64.png"),
    sort_by: 3,
  },
} as Record<ArtifactPieceUid, ArtifactPiece>;
