import { ArtifactSlotKeys } from "./enums/artifact-slot";
import { publicImageSrc } from "@/lib/utils";
import type { ArtifactSlot } from "./types/artifact-slot";

class _ArtifactSlot implements ArtifactSlot {
  readonly key: ArtifactSlot["key"];
  readonly name: ArtifactSlot["name"];
  readonly image_src: ArtifactSlot["image_src"];
  readonly sort_by: ArtifactSlot["sort_by"];

  constructor(
    key: keyof typeof ArtifactSlotKeys,
    name: ArtifactSlot["name"],
    imageName: string,
    sortBy: ArtifactSlot["sort_by"],
  ) {
    this.key = ArtifactSlotKeys[key];
    this.name = name;
    this.image_src = publicImageSrc(`artifact-slots/${imageName}`);
    this.sort_by = sortBy;
  }
}

export default {
  [ArtifactSlotKeys.Circlet]: new _ArtifactSlot("Circlet", "Корона разума", "circlet-64x64.png", 5),
  [ArtifactSlotKeys.Flower]: new _ArtifactSlot("Flower", "Цветок жизни", "flower-64x64.png", 1),
  [ArtifactSlotKeys.Goblet]: new _ArtifactSlot("Goblet", "Кубок пространства", "goblet-64x64.png", 4),
  [ArtifactSlotKeys.Plume]: new _ArtifactSlot("Plume", "Перо смерти", "plume-64x64.png", 2),
  [ArtifactSlotKeys.Sands]: new _ArtifactSlot("Sands", "Пески времени", "sands-64x64.png", 3),
} as Record<ArtifactSlot["key"], ArtifactSlot>;
