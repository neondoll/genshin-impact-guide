import type { STATS } from "@/constants/stats";

export type StatId = typeof STATS[keyof typeof STATS];

export interface Stat {
  id: StatId;
  name: string;
  abbr?: string;
  description?: string; // Добавляем описание
}

// Вспомогательные типы
export interface StatWithValue extends Stat {
  value: number;
  isPercentage: boolean;
}

export type StatMap = Record<StatId, Stat>;
