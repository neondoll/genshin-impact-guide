import { ArtifactSlotKeys } from "../artifact-slots/enums";

export interface IArtifactSlot {
  key: TArtifactSlotKey;
  name: string;
  image_src: string;
  sort_by: number;
}

export type TArtifactSlotKey = typeof ArtifactSlotKeys[keyof typeof ArtifactSlotKeys];
