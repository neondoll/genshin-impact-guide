export const ARTIFACT_SLOTS = {
  FLOWER: "flower",
  PLUME: "plume",
  SANDS: "sands",
  GOBLET: "goblet",
  CIRCLET: "circlet",
} as const;

export type ArtifactSlotId = typeof ARTIFACT_SLOTS[keyof typeof ARTIFACT_SLOTS];

export interface ArtifactSlot {
  id: ArtifactSlotId;
  label: string;
  imageSrc: string;
  sortOrder: number;
}

export type ArtifactSlotArray = ArtifactSlot[];
export type ArtifactSlotMap = Record<ArtifactSlotId, ArtifactSlot>;

export const ARTIFACT_SLOT_ICONS: Record<ArtifactSlotId, string> = {
  [ARTIFACT_SLOTS.FLOWER]: "🌸",
  [ARTIFACT_SLOTS.PLUME]: "🪶",
  [ARTIFACT_SLOTS.SANDS]: "⏳",
  [ARTIFACT_SLOTS.GOBLET]: "🏆",
  [ARTIFACT_SLOTS.CIRCLET]: "👑",
} as const;
export const ARTIFACT_SLOT_LABELS: Record<ArtifactSlotId, ArtifactSlot["label"]> = {
  [ARTIFACT_SLOTS.FLOWER]: "Цветок жизни",
  [ARTIFACT_SLOTS.PLUME]: "Перо смерти",
  [ARTIFACT_SLOTS.SANDS]: "Пески времени",
  [ARTIFACT_SLOTS.GOBLET]: "Кубок пространства",
  [ARTIFACT_SLOTS.CIRCLET]: "Корона разума",
} as const;
