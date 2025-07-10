import { ArtifactSetUidEnum } from "../enums/artifact-set";
import type { ArtifactPieceUid } from "./artifact-piece";
import type { CharacterUid } from "./character";
import type { QualityUid } from "./quality";

type ArtifactSetCharacterRecommendation = { uid: CharacterUid; notes: string };
type ArtifactSetPiece = { name: string; image_src: string };

export type ArtifactSet = Record<ArtifactPieceUid, ArtifactSetPiece> & {
  uid: ArtifactSetUid;
  name: string;
  qualities: QualityUid[];
  where_to_find: string | string[];
  item_bonuses: Record<2 | 4, string>;
  character_recommendations?: ArtifactSetCharacterRecommendation[];
};
export type ArtifactSetUid = typeof ArtifactSetUidEnum[keyof typeof ArtifactSetUidEnum];
