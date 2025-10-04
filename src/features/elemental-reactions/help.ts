import type { ElementalReactionId } from "@/types/elemental-reaction";
import { publicSrc } from "@/lib/utils";
import elementalReactions from "@/data/elemental-reactions";
import Paths from "@/constants/paths";

export function elementalReactionById(id: ElementalReactionId) {
  const elementalReaction = elementalReactions[id];

  return `<a class="text-amber-500 no-underline hover:underline" href="${publicSrc(`#${Paths.ElementalReaction.to(elementalReaction.id)}`)}">${elementalReaction.name}</a>`;
}
