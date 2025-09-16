import type { ArtifactSlot } from "./types";
import { ArtifactSlotIds } from "./enums";
import { publicImageSrc } from "@/lib/utils";

class ArtifactSlotClass implements ArtifactSlot {
  readonly id: ArtifactSlot["id"];
  readonly name: ArtifactSlot["name"];
  readonly sort_by: ArtifactSlot["sort_by"];
  readonly img_src: ArtifactSlot["img_src"];

  static PATH = "artifact-slots";

  constructor(id: ArtifactSlot["id"], name: ArtifactSlot["name"], sortBy: ArtifactSlot["sort_by"]) {
    this.id = id;
    this.name = name;
    this.sort_by = sortBy;
    this.img_src = publicImageSrc(`${ArtifactSlotClass.PATH}/${id}.webp`);
  }
}

export default {
  [ArtifactSlotIds.Circlet]: new ArtifactSlotClass(ArtifactSlotIds.Circlet, "Корона разума", 5),
  [ArtifactSlotIds.Flower]: new ArtifactSlotClass(ArtifactSlotIds.Flower, "Цветок жизни", 1),
  [ArtifactSlotIds.Goblet]: new ArtifactSlotClass(ArtifactSlotIds.Goblet, "Кубок пространства", 4),
  [ArtifactSlotIds.Plume]: new ArtifactSlotClass(ArtifactSlotIds.Plume, "Перо смерти", 2),
  [ArtifactSlotIds.Sands]: new ArtifactSlotClass(ArtifactSlotIds.Sands, "Пески времени", 3),
} as Record<ArtifactSlot["id"], ArtifactSlot>;
