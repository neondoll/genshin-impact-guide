import artifactSets from "../artifact-sets";
import Paths from "@/constants/paths";
import weapons from "../weapons";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { badgeVariants } from "@/components/ui/badge";
import { cn, publicSrc } from "@/lib/utils";
import { StatKeys } from "../enums/stat";
import type { ArtifactSetKey } from "../types/artifact-set";
import type { WeaponKey } from "../types/weapon";

export const StatsCrit = [StatKeys.CRITDMG, StatKeys.CRITRate];
export const StatsElementDamageBonus = [
  StatKeys.AnemoDMGBonus, StatKeys.CryoDMGBonus, StatKeys.DendroDMGBonus,
  StatKeys.ElectroDMGBonus, StatKeys.GeoDMGBonus, StatKeys.HydroDMGBonus,
  StatKeys.PyroDMGBonus,
];

export function artifactSetByKey(key: ArtifactSetKey) {
  const artifactSet = artifactSets[key];

  return `
    <a class="${cn(badgeVariants({ variant: "secondary" }), "pl-1 py-0 text-sm/none")}" href="${publicSrc(`#${Paths.ArtifactSet.to(artifactSet.key)}`)}">
      <img alt="" class="size-4.5" src="${artifactSet[ArtifactSlotKeys.Flower].image_src}" />
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
