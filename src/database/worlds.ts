import { WorldUidEnum } from "./enums/world";
import type { World, WorldUid } from "./types/world.ts";

export default {
  [WorldUidEnum.Teyvat]: { name: "Тейват" },
  [WorldUidEnum.Another]: { name: "Другой мир" },
} as Record<WorldUid, World>;
