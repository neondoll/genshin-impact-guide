import { DungeonKeys } from "../enums/dungeon";
import type { ArtifactSetKey } from "./artifact-set";

export type Dungeon = { key: DungeonKey; name: string; artifact_set_keys: ArtifactSetKey[] };
export type DungeonKey = typeof DungeonKeys[keyof typeof DungeonKeys];
