import { ArtifactSlotKeys } from "./enums/artifact-slot";
import { publicImageSrc } from "@/lib/utils";
import type { ArtifactSlot } from "./types/artifact-slot";

class _ArtifactSlot implements ArtifactSlot {
  readonly key: ArtifactSlot["key"];
  readonly name: ArtifactSlot["name"];
  readonly image_src: ArtifactSlot["image_src"];
  readonly sort_by: ArtifactSlot["sort_by"];

  static PATH = "artifact-slots";

  constructor(
    key: keyof typeof ArtifactSlotKeys,
    name: ArtifactSlot["name"],
    sortBy: ArtifactSlot["sort_by"],
  ) {
    this.key = ArtifactSlotKeys[key];
    this.name = name;
    this.image_src = publicImageSrc(`${_ArtifactSlot.PATH}/${this.key}-64x64.png`);
    this.sort_by = sortBy;
  }
}

export default {
  [ArtifactSlotKeys.Circlet]: new _ArtifactSlot("Circlet", "Корона разума", 5),
  [ArtifactSlotKeys.Flower]: new _ArtifactSlot("Flower", "Цветок жизни", 1),
  [ArtifactSlotKeys.Goblet]: new _ArtifactSlot("Goblet", "Кубок пространства", 4),
  [ArtifactSlotKeys.Plume]: new _ArtifactSlot("Plume", "Перо смерти", 2),
  [ArtifactSlotKeys.Sands]: new _ArtifactSlot("Sands", "Пески времени", 3),
} as Record<ArtifactSlot["key"], ArtifactSlot>;
