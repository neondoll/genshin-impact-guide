import { Link } from "react-router-dom";

import type { TArtifactSetKey } from "@/database/artifact-sets/types";
import { backgroundClassByRarity } from "@/lib/rarity";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { selectArtifactSetById } from "./artifactSetsSelectors";
import Paths from "@/constants/paths";

export default function ArtifactSetBadge({ artifactSetKey }: { artifactSetKey: TArtifactSetKey }) {
  const artifactSet = selectArtifactSetById(artifactSetKey);

  return (
    <Badge
      asChild
      className="flex flex-col gap-2.5 justify-start p-2 w-full text-center text-pretty whitespace-normal sm:flex-row sm:text-left"
      variant="secondary"
    >
      <Link to={Paths.ArtifactSet.to(artifactSet.key)}>
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
