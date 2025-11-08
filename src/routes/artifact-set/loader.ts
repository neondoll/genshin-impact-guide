import type { ArtifactSet } from "@/types/artifact-set";
import type { ArtifactSetRecommendations } from "@/types/artifact-set-recommendations";
import { selectArtifactSetById } from "@/features/artifact-sets/selectors";
import { selectArtifactSetRecommendationsById } from "@/features/artifact-sets-recommendations/selectors";

export interface ArtifactSetLoaderArgs {
  params: Record<string, string | undefined>;
}

export interface ArtifactSetLoaderReturn {
  artifactSet?: ArtifactSet;
  artifactSetRecommendations?: ArtifactSetRecommendations;
}

export default function artifactSetLoader({ params }: ArtifactSetLoaderArgs): ArtifactSetLoaderReturn {
  const artifactSetId = params.artifactSetId as ArtifactSet["id"];

  const artifactSet = selectArtifactSetById(artifactSetId);
  const artifactSetRecommendations = selectArtifactSetRecommendationsById(artifactSetId);

  if (artifactSet) {
    if (artifactSet.rarities.length > 0) {
      window.document.documentElement.classList.add(`rarity-${Math.max(...artifactSet.rarities)}`);
    }
  }

  return { artifactSet, artifactSetRecommendations };
}
