import type { TArtifactSetKey } from "../../artifact-sets/types";
import type { TWeaponKey } from "../../weapons/types";
import { badgeVariants } from "@/components/ui/badge";
import { cn, publicSrc } from "@/lib/utils";
import { StatKeys } from "../../stats/enums";
import artifactSets from "../../artifact-sets/data";
import Paths from "@/constants/paths";
import weapons from "../../weapons/data";

export const StatsCrit = [StatKeys.CritDMG, StatKeys.CritRate];
export const StatsElementDamageBonus = [
  StatKeys.AnemoDmgBonus, StatKeys.CryoDmgBonus, StatKeys.DendroDmgBonus,
  StatKeys.ElectroDmgBonus, StatKeys.GeoDmgBonus, StatKeys.HydroDmgBonus,
  StatKeys.PyroDmgBonus,
];

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

export function weaponByKey(key: TWeaponKey) {
  const weapon = weapons[key];

  return `
    <span class="${cn(badgeVariants({ variant: "secondary" }), "pl-1 py-0 text-sm/none")}">
      <img alt="" class="size-4.5" src="${weapon.image_src}" />
      <span>${weapon.name}</span>
    </span>
  `;
}
