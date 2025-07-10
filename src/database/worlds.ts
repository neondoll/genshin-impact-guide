import { WorldUidEnum } from "./enums/world";
import type { World, WorldUid } from "./types/world";

export default {
  [WorldUidEnum.Another]: { name: "Другой мир" },
  [WorldUidEnum.Teyvat]: { name: "Тейват" },
} as Record<WorldUid, World>;
