import { ArtifactSetKeys } from "../enums/artifact-set";
import type { ArtifactSlotKey } from "./artifact-slot";
import type { CharacterKey } from "./character";
import type { Rarity } from "./rarity";

type ArtifactSetCharacterRecommendation = { key: CharacterKey; notes: string };

export interface ArtifactSet {
  key: ArtifactSetKey;
  name: string;
  rarities: Rarity[];
  source: string | string[];
  item_bonuses: Record<2 | 4, string>;
  slots: Record<ArtifactSlotKey, ArtifactSetSlot | undefined>;
  character_recommendations?: ArtifactSetCharacterRecommendation[];

  imageSrc(): ArtifactSetSlot["image_src"] | undefined;
}

export interface ArtifactSetSlot {
  name: string;
  image_src: string;
}

export type ArtifactSetKey = typeof ArtifactSetKeys[keyof typeof ArtifactSetKeys];
