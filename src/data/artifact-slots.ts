import type { ArtifactSlot as Type } from "@/types/artifact";
import { ARTIFACT_SLOTS } from "@/constants/artifact-slots";
import { ArtifactSlot as Class } from "@/classes/artifact-slot";

export default {
  [ARTIFACT_SLOTS.CIRCLET]: new Class(ARTIFACT_SLOTS.CIRCLET, "Корона разума", 5),
  [ARTIFACT_SLOTS.FLOWER]: new Class(ARTIFACT_SLOTS.FLOWER, "Цветок жизни", 1),
  [ARTIFACT_SLOTS.GOBLET]: new Class(ARTIFACT_SLOTS.GOBLET, "Кубок пространства", 4),
  [ARTIFACT_SLOTS.PLUME]: new Class(ARTIFACT_SLOTS.PLUME, "Перо смерти", 2),
  [ARTIFACT_SLOTS.SANDS]: new Class(ARTIFACT_SLOTS.SANDS, "Пески времени", 3),
} as Record<Type["id"], Type>;
