import { StatIds } from "@/features/stats/enums";

export interface IStat {
  key: TStatKey;
  name: string;
  abbr?: string;
}

export type TStatKey = typeof StatIds[keyof typeof StatIds];
