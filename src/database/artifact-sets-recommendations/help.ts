import artifactSets from "../artifact-sets";
import Paths from "@/constants/paths";
import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { AttributeUidEnum } from "../enums/attribute";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ArtifactSetUid } from "../types/artifact-set";

export const AttributesCrit = [AttributeUidEnum.CritDmg, AttributeUidEnum.CritRate];
export const AttributesElementDamageBonus = [
  AttributeUidEnum.AnemoDamageBonus, AttributeUidEnum.CryoDamageBonus, AttributeUidEnum.DendroDamageBonus,
  AttributeUidEnum.ElectroDamageBonus, AttributeUidEnum.GeoDamageBonus, AttributeUidEnum.HydroDamageBonus,
  AttributeUidEnum.PyroDamageBonus,
];

export function artifactSetByUid(uid: ArtifactSetUid) {
  const artifactSet = artifactSets[uid];

  return `<a class="${cn(badgeVariants({ variant: "secondary" }), "pl-1 py-0 text-sm/none")}" href="/genshin-impact-guide/#${Paths.ArtifactSet.to(artifactSet.uid)}"><img alt="" class="size-4.5" src="${artifactSet[ArtifactPieceUidEnum.FlowerOfLife].image_src}" /><span>${Paths.ArtifactSet.title(artifactSet)}</span></a>`;
}
