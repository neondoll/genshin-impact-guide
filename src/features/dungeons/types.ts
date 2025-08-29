import type { ArtifactSetId } from "../artifact-sets/types";
import { DungeonIds } from "./enums";

export interface Dungeon {
  id: DungeonId;
  name: string;
  artifact_set_ids: ArtifactSetId[];
}

export type DungeonId = typeof DungeonIds[keyof typeof DungeonIds];
