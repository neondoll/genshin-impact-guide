import type { ArtifactSet, ArtifactSetSlot } from "@/types/artifact-set";
import type { ArtifactSetRecommendations } from "@/types/artifact-set-recommendations";
import { type ArtifactSlot, useArtifactSlotLabel } from "@/features/artifact-slots";
import { selectArtifactSetById } from "@/features/artifact-sets/selectors";
import { selectArtifactSetRecommendationsById } from "@/features/artifact-sets-recommendations/selectors";

export interface ArtifactSetLoaderArgs {
  params: Record<string, string | undefined>;
}

export interface ArtifactSetLoaderReturn {
  artifactSet?: ArtifactSet;
  artifactSetRecommendations?: ArtifactSetRecommendations;
  artifactSetSlots?: Array<ArtifactSetSlot & { slotLabel: ArtifactSlot["label"] }>;
}

export default function artifactSetLoader({ params }: ArtifactSetLoaderArgs): ArtifactSetLoaderReturn {
  const artifactSetId = params.artifactSetId as ArtifactSet["id"];

  const artifactSet = selectArtifactSetById(artifactSetId);
  const artifactSetRecommendations = selectArtifactSetRecommendationsById(artifactSetId);

  let artifactSetSlots = undefined;

  if (artifactSet) {
    artifactSetSlots = Object.values(artifactSet.slots).map((artifactSetSlot) => {
      return { ...artifactSetSlot, slotLabel: useArtifactSlotLabel(artifactSetSlot.id) };
    });

    if (artifactSet.rarities.length > 0) {
      window.document.documentElement.classList.add(`rarity-${Math.max(...artifactSet.rarities)}`);
    }
  }

  return { artifactSet, artifactSetRecommendations, artifactSetSlots };
}
