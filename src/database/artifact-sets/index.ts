import type { IArtifactSet } from "./types";

export async function getArtifactSet(key: IArtifactSet["key"]) {
  return (await import("./data")).default[key];
}

export async function getArtifactSets() {
  return Object.values((await import("./data")).default).sort(sortArtifactSets);
}

export function sortArtifactSets(a: IArtifactSet, b: IArtifactSet) {
  const aMaxRarity = Math.max(...a.rarities);
  const bMaxRarity = Math.max(...b.rarities);

  return aMaxRarity === bMaxRarity ? a.name.localeCompare(b.name) : bMaxRarity - aMaxRarity;
}
