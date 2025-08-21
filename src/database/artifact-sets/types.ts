import type { TArtifactSlotKey } from "../artifact-slots/types";
import type { TRarity } from "../rarities/types";
import { ArtifactSetKeys } from "./enums";

export interface IArtifactSet {
  key: TArtifactSetKey;
  name: string;
  rarities: TRarity[];
  sources: string[];
  item_bonuses: Record<2 | 4, string>;
  slots: Record<IArtifactSetSlot["key"], IArtifactSetSlot | undefined>;

  image_src?: IArtifactSetSlot["image_src"];
}

export interface IArtifactSetSlot {
  key: TArtifactSlotKey;
  name: string;
  image_src: string;
}

export type TArtifactSetKey = typeof ArtifactSetKeys[keyof typeof ArtifactSetKeys];
