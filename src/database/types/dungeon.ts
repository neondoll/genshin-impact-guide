import type { TArtifactSetKey } from "../artifact-sets/types";
import { DungeonKeys } from "../enums/dungeon";

export interface Dungeon {
  key: typeof DungeonKeys[keyof typeof DungeonKeys];
  name: string;
  artifact_set_keys: TArtifactSetKey[];
}
