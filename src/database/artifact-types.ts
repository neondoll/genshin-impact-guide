import { ArtifactTypeUidEnum } from "./enums/artifact-types";
import type { ArtifactTypes } from "./types/artifact-types";

export const artifactTypes = {
  [ArtifactTypeUidEnum.FlowerOfLife]: { uid: ArtifactTypeUidEnum.FlowerOfLife, name: "Цветок жизни" },
  [ArtifactTypeUidEnum.PlumeOfDeath]: { uid: ArtifactTypeUidEnum.PlumeOfDeath, name: "Перо смерти" },
  [ArtifactTypeUidEnum.SandsOfEon]: { uid: ArtifactTypeUidEnum.SandsOfEon, name: "Пески времени" },
  [ArtifactTypeUidEnum.GobletOfEonothem]: { uid: ArtifactTypeUidEnum.GobletOfEonothem, name: "Кубок пространства" },
  [ArtifactTypeUidEnum.CircletOfLogos]: { uid: ArtifactTypeUidEnum.CircletOfLogos, name: "Корона разума" },
} as ArtifactTypes;
