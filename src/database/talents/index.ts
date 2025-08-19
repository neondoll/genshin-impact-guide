import type { TTalentKey } from "./types";

export async function getTalent(key: TTalentKey) {
  return (await import("./data")).default[key];
}
