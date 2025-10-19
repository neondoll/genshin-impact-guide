import type { ElementalReactionId } from "@/types/elemental-reaction";
import { cn, publicSrc } from "@/lib/utils";
import { ElementalReactionIds } from "@/enums/elemental-reaction";
import elementalReactions from "@/data/elemental-reactions";
import Paths from "@/constants/paths";

export function elementalReactionLink(id: ElementalReactionId, content: string) {
  return `<a
    class="${cn({
      "no-underline hover:underline": true,
      "text-dendro": ([ElementalReactionIds.Bloom, ElementalReactionIds.LunarBloom] as ElementalReactionId[]).includes(id),
      "text-electro-charged": id === ElementalReactionIds.ElectroCharged,
      "text-lunar-charged": id === ElementalReactionIds.LunarCharged,
      "text-melt": id === ElementalReactionIds.Melt,
      "text-vaporize": id === ElementalReactionIds.Vaporize,
    })}"
    href="${publicSrc(`#${Paths.ElementalReaction.to(id)}`)}"
  >${content}</a>`;
}

export function elementalReactionById(id: ElementalReactionId) {
  const elementalReaction = elementalReactions[id];

  return `
  <a
    class="text-primary no-underline hover:underline"
    href="${publicSrc(`#${Paths.ElementalReaction.to(elementalReaction.id)}`)}"
  >
    ${elementalReaction.name}
  </a>
  `;
}
