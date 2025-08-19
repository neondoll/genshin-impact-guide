import type { IArtifactSlot } from "./types";

export async function getArtifactSlot(key: IArtifactSlot["key"]) {
  return (await import("./data")).default[key];
}

export function sortArtifactSlots(a: IArtifactSlot, b: IArtifactSlot) {
  return a.sort_by - b.sort_by;
}
