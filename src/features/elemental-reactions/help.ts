import type { ElementalReactionId } from "@/types/elemental-reaction";
import { publicSrc } from "@/lib/utils";
import elementalReactions from "@/data/elemental-reactions";
import Paths from "@/constants/paths";

export function elementalReactionLink(id: ElementalReactionId, content: string) {
  return `
  <a
    class="text-primary no-underline hover:underline"
    href="${publicSrc(`#${Paths.ElementalReaction.to(id)}`)}"
  >
    ${content}
  </a>
  `;
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
