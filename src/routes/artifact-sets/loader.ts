import type { ArtifactSet } from "@/types/artifact-set";
import { selectArtifactSetsAll } from "@/features/artifact-sets/selectors";

export interface ArtifactSetsLoaderReturn {
  artifactSets: ArtifactSet[];
}

export default function artifactSetsLoader(): ArtifactSetsLoaderReturn {
  const artifactSets = selectArtifactSetsAll();

  return { artifactSets };
}
