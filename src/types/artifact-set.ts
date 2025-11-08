import type { ARTIFACT_SETS } from "@/features/artifact-sets";
import type { ArtifactSlotId } from "@/features/artifact-slots";
import type { Rarity } from "@/features/rarities";

export interface ArtifactSet {
  id: ArtifactSetId;
  name: string;
  rarities: Rarity[];
  sources: string[];
  itemBonuses: { 2: string; 4: string };
  slots: Partial<Record<ArtifactSlotId, ArtifactSetSlot>>;
  imageSrc?: string;
}

export interface ArtifactSetSlot {
  id: ArtifactSlotId;
  name: string;
  imageSrc: string;
}

export type ArtifactSetId = typeof ARTIFACT_SETS[keyof typeof ARTIFACT_SETS];
