import type { ArtifactSetId } from "../../artifact-sets/types";
import type { WeaponId } from "../../weapons/types";
import { badgeVariants } from "@/components/ui/badge";
import { cn, publicSrc } from "@/lib/utils";
import artifactSets from "../../artifact-sets/data";
import Paths from "@/constants/paths";
import weapons from "../../weapons/data";

export function artifactSetById(id: ArtifactSetId) {
  const artifactSet = artifactSets[id];

  return `
    <a
      class="${cn(badgeVariants({ variant: "secondary" }), "pl-1 py-0 text-sm/none")}"
      href="${publicSrc(`#${Paths.ArtifactSet.to(artifactSet.id)}`)}"
    >
      <img alt="" class="size-4.5" src="${artifactSet.image_src}" />
      <span>${Paths.ArtifactSet.title(artifactSet)}</span>
    </a>
  `;
}

export function weaponById(id: WeaponId) {
  const weapon = weapons[id];

  return `
    <span class="${cn(badgeVariants({ variant: "secondary" }), "pl-1 py-0 text-sm/none")}">
      <img alt="" class="size-4.5" src="${weapon.image_src}" />
      <span>${weapon.name}</span>
    </span>
  `;
}
