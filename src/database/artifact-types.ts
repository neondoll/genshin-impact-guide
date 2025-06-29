import { ArtifactTypeUidEnum } from "./enums/artifact-types";
import type { ArtifactTypes } from "./types/artifact-types";

export const artifactTypes = {
  [ArtifactTypeUidEnum.FlowerOfLife]: { name: "Цветок жизни" },
  [ArtifactTypeUidEnum.PlumeOfDeath]: { name: "Перо смерти" },
  [ArtifactTypeUidEnum.SandsOfEon]: { name: "Пески времени" },
  [ArtifactTypeUidEnum.GobletOfEonothem]: { name: "Кубок пространства" },
  [ArtifactTypeUidEnum.CircletOfLogos]: { name: "Корона разума" },
} as ArtifactTypes;
