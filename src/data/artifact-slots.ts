import type { ArtifactSlot as Type } from "@/types/artifact-slot";
import { ArtifactSlot as Class } from "@/classes/artifact-slot";
import { ArtifactSlotIds } from "@/enums/artifact-slot";

export default {
  [ArtifactSlotIds.Circlet]: new Class(ArtifactSlotIds.Circlet, "Корона разума", 5),
  [ArtifactSlotIds.Flower]: new Class(ArtifactSlotIds.Flower, "Цветок жизни", 1),
  [ArtifactSlotIds.Goblet]: new Class(ArtifactSlotIds.Goblet, "Кубок пространства", 4),
  [ArtifactSlotIds.Plume]: new Class(ArtifactSlotIds.Plume, "Перо смерти", 2),
  [ArtifactSlotIds.Sands]: new Class(ArtifactSlotIds.Sands, "Пески времени", 3),
} as Record<Type["id"], Type>;
