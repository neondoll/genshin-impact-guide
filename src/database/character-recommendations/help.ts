import type { TArtifactSetKey } from "../artifact-sets/types";
import { badgeVariants } from "@/components/ui/badge";
import { cn, publicSrc } from "@/lib/utils";
import artifactSets from "../artifact-sets/data";
import Paths from "@/constants/paths";

export function artifactSetByKey(key: TArtifactSetKey) {
  const artifactSet = artifactSets[key];

  if (artifactSet) {
    return `
     <a class="${cn(badgeVariants({ variant: "secondary" }), "pl-1 py-0 text-sm/none")}" href="${publicSrc(`#${Paths.ArtifactSet.to(artifactSet.key)}`)}">
       <img alt="" class="size-4.5" src="${artifactSet.image_src}" />
       <span>${Paths.ArtifactSet.title(artifactSet)}</span>
     </a>
   `;
  }

  return "";
}
