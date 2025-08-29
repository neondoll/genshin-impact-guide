import type { ArtifactSlot } from "./types";
import { ArtifactSlotIds } from "./enums";
import { publicImageSrc } from "@/lib/utils";

class ArtifactSlotClass implements ArtifactSlot {
  readonly id: ArtifactSlot["id"];
  readonly name: ArtifactSlot["name"];
  readonly image_src: ArtifactSlot["image_src"];
  readonly sort_by: ArtifactSlot["sort_by"];

  static PATH = "artifact-slots";

  constructor(
    id: ArtifactSlot["id"],
    name: ArtifactSlot["name"],
    sortBy: ArtifactSlot["sort_by"],
  ) {
    this.id = id;
    this.name = name;
    this.image_src = publicImageSrc(`${ArtifactSlotClass.PATH}/${id}-64x64.png`);
    this.sort_by = sortBy;
  }

  static init(params: ConstructorParameters<typeof ArtifactSlotClass>) {
    return new ArtifactSlotClass(...params);
  }
}

export default {
  [ArtifactSlotIds.Circlet]: ArtifactSlotClass.init([ArtifactSlotIds.Circlet, "Корона разума", 5]),
  [ArtifactSlotIds.Flower]: ArtifactSlotClass.init([ArtifactSlotIds.Flower, "Цветок жизни", 1]),
  [ArtifactSlotIds.Goblet]: ArtifactSlotClass.init([ArtifactSlotIds.Goblet, "Кубок пространства", 4]),
  [ArtifactSlotIds.Plume]: ArtifactSlotClass.init([ArtifactSlotIds.Plume, "Перо смерти", 2]),
  [ArtifactSlotIds.Sands]: ArtifactSlotClass.init([ArtifactSlotIds.Sands, "Пески времени", 3]),
} as Record<ArtifactSlot["id"], ArtifactSlot>;
