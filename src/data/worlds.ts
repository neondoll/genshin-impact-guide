import type { World } from "@/types/world";
import { WorldIds } from "@/enums/world";

export default {
  [WorldIds.Another]: { id: WorldIds.Another, name: "Другой мир" },
  [WorldIds.Teyvat]: { id: WorldIds.Teyvat, name: "Тейват" },
} as Record<World["id"], World>;
