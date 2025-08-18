import { ArtifactSetKeys } from "../enums/artifact-set";
import type { ArtifactSetRecommendations } from "./artifact-set-recommendations";
import type { ArtifactSlot } from "./artifact-slot";
import type { CharacterKey } from "./character";
import type { Rarity } from "./rarity";
import { getArtifactSetRecommendations, getArtifactSlot } from "..";

type ArtifactSetCharacterRecommendation = { key: CharacterKey; notes: string };

export interface ArtifactSet {
  key: ArtifactSetKey;
  name: string;
  rarities: Rarity[];
  source: string | string[];
  item_bonuses: Record<2 | 4, string>;
  slots: Record<ArtifactSlot["key"], ArtifactSetSlot | undefined>;
  character_recommendations?: ArtifactSetCharacterRecommendation[];

  image_src?: ArtifactSetSlot["image_src"];
  recommendations?: ArtifactSetRecommendations;

  getRecommendations: () => ReturnType<typeof getArtifactSetRecommendations>;
}

export interface ArtifactSetSlot {
  key: ArtifactSlot["key"];
  name: string;
  image_src: string;

  getSlot: () => ReturnType<typeof getArtifactSlot>;
}

export type ArtifactSetKey = typeof ArtifactSetKeys[keyof typeof ArtifactSetKeys];
