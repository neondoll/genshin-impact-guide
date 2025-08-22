import type { ArtifactSetId } from "../../artifact-sets/types";
import type { TWeaponKey } from "@/database/weapons/types";
import { badgeVariants } from "@/components/ui/badge";
import { cn, publicSrc } from "@/lib/utils";
import { StatKeys } from "@/database/stats/enums";
import artifactSets from "../../artifact-sets/data";
import Paths from "@/constants/paths";
import weapons from "@/database/weapons/data";

export const StatsCrit = [StatKeys.CritDMG, StatKeys.CritRate];
export const StatsElementDamageBonus = [
  StatKeys.AnemoDmgBonus, StatKeys.CryoDmgBonus, StatKeys.DendroDmgBonus,
  StatKeys.ElectroDmgBonus, StatKeys.GeoDmgBonus, StatKeys.HydroDmgBonus,
  StatKeys.PyroDmgBonus,
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

export function weaponById(id: TWeaponKey) {
  const weapon = weapons[id];

  return `
    <span class="${cn(badgeVariants({ variant: "secondary" }), "pl-1 py-0 text-sm/none")}">
      <img alt="" class="size-4.5" src="${weapon.image_src}" />
      <span>${weapon.name}</span>
    </span>
  `;
}
