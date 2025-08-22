import type { ArtifactSetId } from "@/features/artifact-sets/types";
import { badgeVariants } from "@/components/ui/badge";
import { cn, publicSrc } from "@/lib/utils";
import artifactSets from "@/features/artifact-sets/data";
import Paths from "@/constants/paths";

export function artifactSetByKey(id: ArtifactSetId) {
  const artifactSet = artifactSets[id];

  if (artifactSet) {
    return `
     <a class="${cn(badgeVariants({ variant: "secondary" }), "pl-1 py-0 text-sm/none")}" href="${publicSrc(`#${Paths.ArtifactSet.to(artifactSet.id)}`)}">
       <img alt="" class="size-4.5" src="${artifactSet.image_src}" />
       <span>${Paths.ArtifactSet.title(artifactSet)}</span>
     </a>
   `;
  }

  return "";
}
