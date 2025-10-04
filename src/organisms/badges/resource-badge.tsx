import type { Resource } from "@/types/resource";
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
      rarities={resourceRarity ? [resourceRarity] : undefined}
      title={resourceName}
    />
  );
}
