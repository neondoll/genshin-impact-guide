import type { IWorld } from "./types";
import { WorldKeys } from "./enums";

export default {
  [WorldKeys.Another]: { key: WorldKeys.Another, name: "Другой мир" },
  [WorldKeys.Teyvat]: { key: WorldKeys.Teyvat, name: "Тейват" },
} as Record<IWorld["key"], IWorld>;
