import { DungeonUidEnum } from "../enums/dungeon";
import type { ArtifactSetUid } from "./artifact-set";

export type Dungeon = { uid: DungeonUid; name: string; artifact_set_uids: ArtifactSetUid[] };
export type DungeonUid = typeof DungeonUidEnum[keyof typeof DungeonUidEnum];
