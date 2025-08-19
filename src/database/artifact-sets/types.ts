import type { IArtifactSetRecommendations } from "../artifact-sets-recommendations/types";
import type { IArtifactSlot } from "../artifact-slots/types";
import type { TRarity } from "../rarities/types";
import { ArtifactSetKeys } from "./enums";

export interface IArtifactSet {
  key: TArtifactSetKey;
  name: string;
  rarities: TRarity[];
  source: string | string[];
  item_bonuses: Record<2 | 4, string>;
  slots: Record<IArtifactSlot["key"], IArtifactSetSlot | undefined>;

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
