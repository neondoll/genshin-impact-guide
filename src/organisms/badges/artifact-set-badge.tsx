import type { ArtifactSet } from "@/types/artifact-set";
import AbstractBadge from "./abstract-badge";
import Paths from "@/constants/paths";

export default function ArtifactSetBadge({ artifactSetId, artifactSetImageSrc, artifactSetName, artifactSetRarities }: {
  artifactSetId: ArtifactSet["id"];
  artifactSetImageSrc: ArtifactSet["imageSrc"];
  artifactSetName: ArtifactSet["name"];
  artifactSetRarities: ArtifactSet["rarities"];
}) {
  return (
    <AbstractBadge
      imgAlt={artifactSetId}
      imgSrc={artifactSetImageSrc}
      linkTo={Paths.ArtifactSet.to(artifactSetId)}
      rarities={artifactSetRarities}
      title={artifactSetName}
    />
  );
}
