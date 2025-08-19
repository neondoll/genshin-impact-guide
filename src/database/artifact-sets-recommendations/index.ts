import type { TArtifactSetKey } from "../artifact-sets/types";

export async function getArtifactSetRecommendations(key: TArtifactSetKey) {
  const data = (await import("./data")).default;

  return key in data ? data[key] : undefined;
}
