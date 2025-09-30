import type { ArtifactSetId } from "@/types/artifact-set";
import { DungeonIds } from "./enums";

export interface Dungeon {
  id: DungeonId;
  name: string;
  artifact_set_ids: ArtifactSetId[];
}

export type DungeonId = typeof DungeonIds[keyof typeof DungeonIds];
