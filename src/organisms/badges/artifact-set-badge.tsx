import type { ArtifactSetId } from "@/types/artifact-set";
import { selectArtifactSetById } from "@/features/artifact-sets/selectors";
import AbstractBadge from "./abstract-badge";
import Paths from "@/constants/paths";

export default function ArtifactSetBadge({ artifactSetId }: { artifactSetId: ArtifactSetId }) {
  const artifactSet = selectArtifactSetById(artifactSetId);

  return (
    <AbstractBadge
      imgAlt={artifactSetId}
      imgSrc={artifactSet.image_src}
      linkTo={Paths.ArtifactSet.to(artifactSetId)}
      rarities={artifactSet.rarities}
      title={artifactSet.name}
    />
  );
}
