import type { ArtifactPieceUid } from "./artifact-pieces";
import type { ArtifactSetUidEnum } from "../enums/artifact-sets";
import type { CharacterUid } from "./characters";
import type { QualityUid } from "./qualities";

type ArtifactSet = {
  uid: ArtifactSetUid;
  name: string;
  qualities: QualityUid[];
  where_to_find: string | string[];
  item_bonuses: Record<2 | 4, string>;
  character_recommendations?: { uid: CharacterUid; notes: string }[];
} & Record<ArtifactPieceUid, { name: string; image_src: string }>;

export type ArtifactSets = Record<ArtifactSetUid, ArtifactSet>;
export type ArtifactSetUid = typeof ArtifactSetUidEnum[keyof typeof ArtifactSetUidEnum];
