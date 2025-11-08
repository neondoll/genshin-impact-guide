import type { ElementalReaction } from "@/types/elemental-reaction";
import { selectElementalReactionById } from "@/features/elemental-reactions/selectors";

export interface ElementalReactionLoaderArgs {
  params: Record<string, string | undefined>;
}

export interface ElementalReactionLoaderReturn {
  elementalReaction?: ElementalReaction;
}

export default function elementalReactionLoader({ params }: ElementalReactionLoaderArgs): ElementalReactionLoaderReturn {
  const elementalReactionId = params.elementalReactionId as ElementalReaction["id"];

  const elementalReaction = selectElementalReactionById(elementalReactionId);

  return { elementalReaction };
}
