import type { IArtifactSlot } from "./types";
import { ArtifactSlotKeys } from "./enums";
import { CArtifactSlot } from "./classes";

export default {
  [ArtifactSlotKeys.Circlet]: new CArtifactSlot("Circlet", "Корона разума", 5),
  [ArtifactSlotKeys.Flower]: new CArtifactSlot("Flower", "Цветок жизни", 1),
  [ArtifactSlotKeys.Goblet]: new CArtifactSlot("Goblet", "Кубок пространства", 4),
  [ArtifactSlotKeys.Plume]: new CArtifactSlot("Plume", "Перо смерти", 2),
  [ArtifactSlotKeys.Sands]: new CArtifactSlot("Sands", "Пески времени", 3),
} as Record<IArtifactSlot["key"], IArtifactSlot>;
