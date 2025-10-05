import type { ArtifactSetId } from "@/types/artifact-set";
import type { WeaponId } from "@/types/weapon";
import { badgeVariants } from "@/components/ui/badge";
import { cn, publicSrc } from "@/lib/utils";
import { StatIds } from "@/enums/stat";
import artifactSets from "../artifact-sets";
import Paths from "@/constants/paths";
import weapons from "../weapons";

export const StatsCrit = [StatIds.CritDMG, StatIds.CritRate];
export const StatsElementDamageBonus = [
  StatIds.AnemoDmgBonus, StatIds.CryoDmgBonus, StatIds.DendroDmgBonus,
  StatIds.ElectroDmgBonus, StatIds.GeoDmgBonus, StatIds.HydroDmgBonus,
  StatIds.PyroDmgBonus,
];

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
      <span>${weapon.title}</span>
    </span>
  `;
}
