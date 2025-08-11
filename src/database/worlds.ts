import { WorldKeys } from "./enums/world";
import type { World, WorldKey } from "./types/world";

export default {
  [WorldKeys.Another]: { name: "Другой мир" },
  [WorldKeys.Teyvat]: { name: "Тейват" },
} as Record<WorldKey, World>;
