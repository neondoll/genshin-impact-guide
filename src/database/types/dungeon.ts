import { DungeonKeys } from "../enums/dungeon";
import type { ArtifactSetKey } from "./artifact-set";

export interface Dungeon {
  key: typeof DungeonKeys[keyof typeof DungeonKeys];
  name: string;
  artifact_set_keys: ArtifactSetKey[];
}
