import type { IArtifactSlot } from "./types";
import { ArtifactSlotKeys } from "./enums";
import { CArtifactSlot } from "./classes";

export default {
  [ArtifactSlotKeys.Circlet]: CArtifactSlot.init([ArtifactSlotKeys.Circlet, "Корона разума", 5]),
  [ArtifactSlotKeys.Flower]: CArtifactSlot.init([ArtifactSlotKeys.Flower, "Цветок жизни", 1]),
  [ArtifactSlotKeys.Goblet]: CArtifactSlot.init([ArtifactSlotKeys.Goblet, "Кубок пространства", 4]),
  [ArtifactSlotKeys.Plume]: CArtifactSlot.init([ArtifactSlotKeys.Plume, "Перо смерти", 2]),
  [ArtifactSlotKeys.Sands]: CArtifactSlot.init([ArtifactSlotKeys.Sands, "Пески времени", 3]),
} as Record<IArtifactSlot["key"], IArtifactSlot>;
