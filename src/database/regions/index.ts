import type { TRegionKey } from "./types";

export async function getRegion(key: TRegionKey) {
  return (await import("./data")).default[key];
}
