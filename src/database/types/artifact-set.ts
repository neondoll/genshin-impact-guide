import { ArtifactSetKeys } from "../enums/artifact-set";
import type { ArtifactSlotKey } from "./artifact-slot";
import type { CharacterKey } from "./character";
import type { Rarity } from "./rarity";

type ArtifactSetCharacterRecommendation = { key: CharacterKey; notes: string };
type ArtifactSetSlot = { name: string; image_src: string };

export type ArtifactSet = Record<ArtifactSlotKey, ArtifactSetSlot> & {
  key: ArtifactSetKey;
  name: string;
  rarities: Rarity[];
  source: string | string[];
  item_bonuses: Record<2 | 4, string>;
  character_recommendations?: ArtifactSetCharacterRecommendation[];
};
export type ArtifactSetKey = typeof ArtifactSetKeys[keyof typeof ArtifactSetKeys];
