import { Link } from "react-router-dom";

import type { ArtifactSetId } from "./types";
import { backgroundClassByRarity } from "@/lib/rarity";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { selectArtifactSetById } from "./selectors";
import Paths from "@/constants/paths";

export default function ArtifactSetBadge({ artifactSetId }: { artifactSetId: ArtifactSetId }) {
  const artifactSet = selectArtifactSetById(artifactSetId);

  return (
    <Badge
      asChild
      className="flex flex-col gap-2.5 justify-start p-2 w-full text-center text-pretty whitespace-normal sm:flex-row sm:text-left"
      variant="secondary"
    >
      <Link to={Paths.ArtifactSet.to(artifactSet.id)}>
        <img
          alt={artifactSet.name}
          className={cn("shrink-0 size-12 rounded-md rounded-br-2xl", backgroundClassByRarity(...artifactSet.rarities))}
          src={artifactSet.image_src}
        />
        <span children={artifactSet.name} />
      </Link>
    </Badge>
  );
}
