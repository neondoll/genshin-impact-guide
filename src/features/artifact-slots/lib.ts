import type { ArtifactSlot } from "./types";
import { ARTIFACT_SLOT_ICONS, ARTIFACT_SLOT_LABELS } from "./types";

export class ArtifactSlotEntity implements ArtifactSlot {
  readonly id: ArtifactSlot["id"];
  readonly label: ArtifactSlot["label"];
  readonly imageSrc: ArtifactSlot["imageSrc"];
  readonly sortOrder: ArtifactSlot["sortOrder"];

  constructor(id: ArtifactSlot["id"], imageSrc: ArtifactSlot["imageSrc"], sortOrder: ArtifactSlot["sortOrder"]) {
    this.id = id;
    this.label = ARTIFACT_SLOT_LABELS[id];
    this.imageSrc = imageSrc;
    this.sortOrder = sortOrder;
  }

  static create(data: Omit<ArtifactSlot, "label">): ArtifactSlotEntity {
    return new ArtifactSlotEntity(data.id, data.imageSrc, data.sortOrder);
  }
}

export const compareArtifactSlots = (a: ArtifactSlot, b: ArtifactSlot): number => {
  return a.sortOrder - b.sortOrder;
};
export const getArtifactSlotIcon = (id: ArtifactSlot["id"]): string => {
  return ARTIFACT_SLOT_ICONS[id];
};
