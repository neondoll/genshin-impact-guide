import type { TArtifactSetKey } from "../artifact-sets/types";
import { DungeonKeys } from "./enums";

export interface IDungeon {
  key: TDungeonKey;
  name: string;
  artifact_set_keys: TArtifactSetKey[];
}

export type TDungeonKey = typeof DungeonKeys[keyof typeof DungeonKeys];
