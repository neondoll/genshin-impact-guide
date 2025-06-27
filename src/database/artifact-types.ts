type ArtifactType = { name: string };
type ArtifactTypes = Record<ArtifactTypeUid, ArtifactType>;

export type ArtifactTypeUid = typeof ArtifactTypeUidEnum[keyof typeof ArtifactTypeUidEnum];

export const ArtifactTypeUidEnum = {
  /* Корона разума      */ CircletOfLogos: "circlet_of_logos",
  /* Цветок жизни       */ FlowerOfLife: "flower_of_life",
  /* Кубок пространства */ GobletOfEonothem: "goblet_of_eonothem",
  /* Перо смерти        */ PlumeOfDeath: "plume_of_death",
  /* Пески времени      */ SandsOfEon: "sands_of_eon",
} as const;

const artifactTypes = {
  [ArtifactTypeUidEnum.FlowerOfLife]: { name: "Цветок жизни" },
  [ArtifactTypeUidEnum.PlumeOfDeath]: { name: "Перо смерти" },
  [ArtifactTypeUidEnum.SandsOfEon]: { name: "Пески времени" },
  [ArtifactTypeUidEnum.GobletOfEonothem]: { name: "Кубок пространства" },
  [ArtifactTypeUidEnum.CircletOfLogos]: { name: "Корона разума" },
} as ArtifactTypes;

export function getArtifactTypes() {
  return artifactTypes;
}
