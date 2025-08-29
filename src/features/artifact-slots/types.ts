import { ArtifactSlotIds } from "./enums";

export interface ArtifactSlot {
  id: ArtifactSlotId;
  name: string;
  image_src: string;
  sort_by: number;
}

export type ArtifactSlotId = typeof ArtifactSlotIds[keyof typeof ArtifactSlotIds];
