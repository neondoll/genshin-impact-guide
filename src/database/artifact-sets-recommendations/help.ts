import artifactSets from "../artifact-sets";
import Paths from "@/constants/paths";
import weapons from "../weapons";
import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { AttributeUidEnum } from "../enums/attribute";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ArtifactSetUid } from "../types/artifact-set";
import type { WeaponUid } from "../types/weapon";

export const AttributesCrit = [AttributeUidEnum.CRITDMG, AttributeUidEnum.CRITRate];
export const AttributesElementDamageBonus = [
  AttributeUidEnum.AnemoDMGBonus, AttributeUidEnum.CryoDMGBonus, AttributeUidEnum.DendroDMGBonus,
  AttributeUidEnum.ElectroDMGBonus, AttributeUidEnum.GeoDMGBonus, AttributeUidEnum.HydroDMGBonus,
  AttributeUidEnum.PyroDMGBonus,
];

export function artifactSetByUid(uid: ArtifactSetUid) {
  const artifactSet = artifactSets[uid];

  return `<a class="${cn(badgeVariants({ variant: "secondary" }), "pl-1 py-0 text-sm/none")}" href="/genshin-impact-guide/#${Paths.ArtifactSet.to(artifactSet.uid)}"><img alt="" class="size-4.5" src="${artifactSet[ArtifactPieceUidEnum.FlowerOfLife].image_src}" /><span>${Paths.ArtifactSet.title(artifactSet)}</span></a>`;
}

export function weaponByUid(uid: WeaponUid) {
  const weapon = weapons[uid];

  return `<span class="${cn(badgeVariants({ variant: "secondary" }), "pl-1 py-0 text-sm/none")}"><img alt="" class="size-4.5" src="${weapon.image_src}" /><span>${weapon.name}</span></span>`;
}
