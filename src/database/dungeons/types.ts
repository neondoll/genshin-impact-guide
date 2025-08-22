import type { ArtifactSetId } from "@/features/artifact-sets/types";
import { DungeonKeys } from "./enums";

export interface IDungeon {
  key: TDungeonKey;
  name: string;
  artifact_set_ids: ArtifactSetId[];
}

export type TDungeonKey = typeof DungeonKeys[keyof typeof DungeonKeys];
