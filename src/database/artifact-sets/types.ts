import type { IArtifactSetRecommendations } from "../artifact-sets-recommendations/types";
import type { IArtifactSlot } from "../artifact-slots/types";
import type { Rarity } from "../types/rarity";
import type { TCharacterKey } from "../characters/types";
import { ArtifactSetKeys } from "./enums";

interface IArtifactSetCharacterRecommendation {
  key: TCharacterKey;
  notes: string;
}

export interface IArtifactSet {
  key: TArtifactSetKey;
  name: string;
  rarities: Rarity[];
  source: string | string[];
  item_bonuses: Record<2 | 4, string>;
  slots: Record<IArtifactSlot["key"], IArtifactSetSlot | undefined>;
  character_recommendations?: IArtifactSetCharacterRecommendation[];

  image_src?: IArtifactSetSlot["image_src"];
  getRecommendations: () => Promise<IArtifactSetRecommendations | undefined>;
}

export interface IArtifactSetSlot {
  key: IArtifactSlot["key"];
  name: string;
  image_src: string;

  getSlot: () => Promise<IArtifactSlot>;
}

export type TArtifactSetKey = typeof ArtifactSetKeys[keyof typeof ArtifactSetKeys];
