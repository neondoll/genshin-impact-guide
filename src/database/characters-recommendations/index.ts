import type { TCharacterKey } from "../characters/types";

export async function getCharacterRecommendations(key: TCharacterKey) {
  const data = (await import("./data")).default;

  return key in data ? data[key] : undefined;
}
