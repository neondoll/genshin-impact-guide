import type { ArtifactSetId } from "@/types/artifact-set";
import type { WeaponId } from "@/types/weapon";
import { badgeVariants } from "@/components/ui/badge";
import { cn, publicSrc } from "@/lib/utils";
import { STATS } from "@/constants/stats";
import artifactSets from "../artifact-sets";
import Paths from "@/constants/paths";
import weapons from "../weapons";

export const StatsCrit = [STATS.CRIT_DMG, STATS.CRIT_RATE];
export const StatsElementDamageBonus = [
  STATS.ANEMO_DMG_BONUS, STATS.CRYO_DMG_BONUS, STATS.DENDRO_DMG_BONUS,
  STATS.ELECTRO_DMG_BONUS, STATS.GEO_DMG_BONUS, STATS.HYDRO_DMG_BONUS,
  STATS.PYRO_DMG_BONUS,
];

export function artifactSetById(id: ArtifactSetId) {
  const artifactSet = artifactSets[id];

  return `
    <a
      class="${cn(badgeVariants({ variant: "secondary" }), "pl-1 py-0 text-sm/none")}"
      href="${publicSrc(`#${Paths.ArtifactSet.to(artifactSet.id)}`)}"
    >
      <img alt="" class="size-4.5" src="${artifactSet.imageSrc}" />
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
