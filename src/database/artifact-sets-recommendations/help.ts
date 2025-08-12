import artifactSets from "../artifact-sets";
import Paths from "@/constants/paths";
import weapons from "../weapons";
import { badgeVariants } from "@/components/ui/badge";
import { cn, publicSrc } from "@/lib/utils";
import { StAtkeys } from "../enums/stat";
import type { ArtifactSetKey } from "../types/artifact-set";
import type { WeaponKey } from "../types/weapon";

export const StatsCrit = [StAtkeys.CritDMG, StAtkeys.CritRate];
export const StatsElementDamageBonus = [
  StAtkeys.AnemoDmgBonus, StAtkeys.CryoDmgBonus, StAtkeys.DendroDmgBonus,
  StAtkeys.ElectroDmgBonus, StAtkeys.GeoDmgBonus, StAtkeys.HydroDmgBonus,
  StAtkeys.PyroDmgBonus,
];

export function artifactSetByKey(key: ArtifactSetKey) {
  const artifactSet = artifactSets[key];

  return `
    <a class="${cn(badgeVariants({ variant: "secondary" }), "pl-1 py-0 text-sm/none")}" href="${publicSrc(`#${Paths.ArtifactSet.to(artifactSet.key)}`)}">
      <img alt="" class="size-4.5" src="${artifactSet.imageSrc()}" />
      <span>${Paths.ArtifactSet.title(artifactSet)}</span>
    </a>
  `;
}

export function weaponByKey(key: WeaponKey) {
  const weapon = weapons[key];

  return `
    <span class="${cn(badgeVariants({ variant: "secondary" }), "pl-1 py-0 text-sm/none")}">
      <img alt="" class="size-4.5" src="${weapon.image_src}" />
      <span>${weapon.name}</span>
    </span>
  `;
}
