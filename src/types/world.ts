export interface World {
  name: string;
}

export type WorldKey = "another" | "teyvat";
export type Worlds = Record<WorldKey, World>;
