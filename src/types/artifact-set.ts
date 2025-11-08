import type { ARTIFACT_SETS } from "@/constants/artifact-sets";
import type { ArtifactSlotId } from "./artifact";
import type { Rarity } from "./rarity";

export type ArtifactSetId = typeof ARTIFACT_SETS[keyof typeof ARTIFACT_SETS];

export interface ArtifactSetSlot {
  id: ArtifactSlotId;
  name: string;
  imageSrc: string; // camelCase вместо snake_case
}

export interface ArtifactSet {
  id: ArtifactSetId;
  name: string;
  rarities: Rarity[];
  sources: string[];
  itemBonuses: { // camelCase вместо snake_case
    2: string;
    4: string;
  };
  slots: Partial<Record<ArtifactSlotId, ArtifactSetSlot>>; // Более точный тип

  // Опциональные поля
  imageSrc?: string; // Общее изображение набора
}

// Вспомогательные типы
export type ArtifactSetBonus = keyof ArtifactSet["itemBonuses"]; // 2 | 4

export interface ArtifactSetWithSlots extends ArtifactSet {
  slots: Record<ArtifactSlotId, ArtifactSetSlot>; // Все слоты обязательны
}
