import { Link } from "react-router-dom";

import type { Resource } from "@/features/resources/types";
import { backgroundClassByRarity } from "@/lib/rarity";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Paths from "@/constants/paths";

export default function ResourceBadge({ resourceId, resourceImgSrc, resourceName, resourceRarity }: {
  resourceId: Resource["id"];
  resourceImgSrc: Resource["image_src"];
  resourceName: Resource["name"];
  resourceRarity?: Resource["rarity"];
}) {
  return (
    <Badge asChild className="flex-col p-0 w-16.5" variant="secondary">
      <Link to={Paths.Resource.to(resourceId)}>
        <span className="relative shrink-0 size-16">
          <img
            alt={resourceId}
            className={cn(
              "size-full rounded-md rounded-br-2xl rounded-bl-none",
              resourceRarity ? backgroundClassByRarity(resourceRarity) : "bg-linear-to-b from-[#323947] to-[#4a5366]",
            )}
            src={resourceImgSrc}
          />
        </span>
        <span children={resourceName} className="p-0.5 w-full text-center truncate" />
      </Link>
    </Badge>
  );
}
