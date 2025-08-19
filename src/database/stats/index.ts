import type { IStat } from "./types";

export async function getStat(key: IStat["key"]) {
  return (await import("./data")).default[key];
}

export async function getStats(keys?: IStat["key"][]) {
  let stats = Object.values((await import("./data")).default);

  if (keys) {
    stats = stats.filter(stat => keys.includes(stat.key));
  }

  return stats.sort(sortStats);
}

export function sortStats(a: IStat, b: IStat) {
  const aName = a.abbr || a.name;
  const bName = b.abbr || b.name;

  return aName.localeCompare(bName);
}
