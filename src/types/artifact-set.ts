import type { ArtifactSlotId } from "./artifact-slot";
import type { Rarity } from "@/features/rarities/types";
import { ArtifactSetIds } from "@/enums/artifact-set";

export interface ArtifactSet {
  id: ArtifactSetId;
  name: string;
  rarities: Rarity[];
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
