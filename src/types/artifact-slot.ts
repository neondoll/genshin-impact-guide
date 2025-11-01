import { type ArtifactSlotIds } from "@/enums/artifact-slot";

export interface ArtifactSlot {
  id: ArtifactSlotId;
  name: string;
  sort_by: number;
  img_src: string;
}

export type ArtifactSlotId = typeof ArtifactSlotIds[keyof typeof ArtifactSlotIds];
