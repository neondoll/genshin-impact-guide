import type { ARTIFACT_SETS } from "@/constants/artifact-sets";
import type { ARTIFACT_SLOTS } from "@/constants/artifact-slots";

// Базовые типы
export type ArtifactSetId = typeof ARTIFACT_SETS[keyof typeof ARTIFACT_SETS];
export type ArtifactSlotId = typeof ARTIFACT_SLOTS[keyof typeof ARTIFACT_SLOTS];

// Основные интерфейсы
export interface ArtifactSlot {
  id: ArtifactSlotId;
  name: string;
  sortOrder: number;
  imageSrc: string;
}

export interface Artifact {
  id: string;
  slot: ArtifactSlotId;
  set: ArtifactSetId;
  level: number;
  mainStat: ArtifactStat;
  subStats: ArtifactSubStat[];
  equippedCharacter?: string;
  lock: boolean;
}

export interface ArtifactStat {
  type: StatType;
  value: number;
}

export interface ArtifactSubStat extends ArtifactStat {
  rolls: number;
}

// Вспомогательные типы
export type StatType
  = | "hp" | "hp_percent" | "atk" | "atk_percent" | "def" | "def_percent"
    | "elemental_mastery" | "energy_recharge" | "crit_rate" | "crit_damage"
    | "healing_bonus" | "physical_damage_bonus" | "elemental_damage_bonus";

export type MainStatType = Exclude<StatType,
  "hp" | "atk" | "def" | "crit_rate" | "crit_damage" | "healing_bonus">;
