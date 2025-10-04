import type { ArtifactSetId } from "./artifact-set";
import { DungeonIds } from "@/enums/dungeon";

export interface Dungeon {
  id: DungeonId;
  name: string;
  artifact_set_ids: ArtifactSetId[];
}

export type DungeonId = typeof DungeonIds[keyof typeof DungeonIds];
