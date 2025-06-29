import { WorldUidEnum } from "./enums/worlds";
import type { Worlds } from "./types/worlds";

export const worlds = {
  [WorldUidEnum.Teyvat]: { name: "Тейват" },
  [WorldUidEnum.Another]: { name: "Другой мир" },
} as Worlds;
