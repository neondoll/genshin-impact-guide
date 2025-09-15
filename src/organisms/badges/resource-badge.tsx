import type { Resource } from "@/features/resources/types";
import AbstractBadge from "./abstract-badge";
import Paths from "@/constants/paths";

export default function ResourceBadge({ resourceId, resourceImgSrc, resourceName, resourceRarity }: {
  resourceId: Resource["id"];
  resourceImgSrc: Resource["image_src"];
  resourceName: Resource["name"];
  resourceRarity?: Resource["rarity"];
}) {
  return (
    <AbstractBadge
      imgAlt={resourceId}
      imgSrc={resourceImgSrc}
      linkTo={Paths.Resource.to(resourceId)}
      rarity={resourceRarity}
      title={resourceName}
    />
  );
}
