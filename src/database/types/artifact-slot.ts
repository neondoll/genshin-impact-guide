import { ArtifactSlotKeys } from "../enums/artifact-slot";

export type ArtifactSlot = { key: ArtifactSlotKey; name: string; image_src: string; sort_by: number };
export type ArtifactSlotKey = typeof ArtifactSlotKeys[keyof typeof ArtifactSlotKeys];
