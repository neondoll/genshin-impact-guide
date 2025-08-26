import type { ArtifactSlotId } from "../artifact-slots/types";
import type { TRarity } from "@/database/rarities/types";
import { ArtifactSetIds } from "./enums";

export interface ArtifactSet {
  id: ArtifactSetId;
  name: string;
  rarities: TRarity[];
  sources: string[];
  item_bonuses: Record<2 | 4, string>;
  slots: Record<ArtifactSetSlot["id"], ArtifactSetSlot | undefined>;

  image_src?: ArtifactSetSlot["image_src"];
}

export interface ArtifactSetSlot {
  id: ArtifactSlotId;
  name: string;
  image_src: string;
}

export type ArtifactSetId = typeof ArtifactSetIds[keyof typeof ArtifactSetIds];
