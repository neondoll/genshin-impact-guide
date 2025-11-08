export const ARTIFACT_SLOTS = {
  FLOWER: "flower",
  PLUME: "plume",
  SANDS: "sands",
  GOBLET: "goblet",
  CIRCLET: "circlet",
} as const;

export type ArtifactSlot = typeof ARTIFACT_SLOTS[keyof typeof ARTIFACT_SLOTS];

export const ARTIFACT_SLOT_LABELS: Record<ArtifactSlot, string> = {
  [ARTIFACT_SLOTS.FLOWER]: "Цветок жизни",
  [ARTIFACT_SLOTS.PLUME]: "Перо смерти",
  [ARTIFACT_SLOTS.SANDS]: "Пески времени",
  [ARTIFACT_SLOTS.GOBLET]: "Кубок пространства",
  [ARTIFACT_SLOTS.CIRCLET]: "Корона разума",
} as const;
