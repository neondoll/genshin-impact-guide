import type { ElementId } from "./element";
import { ElementalReactionIds } from "@/enums/elemental-reaction";

export interface ElementalReaction {
  id: ElementalReactionId;
  name: string;
  first_element_id: ElementalReactionElementId;
  second_element_id: ElementalReactionElementId;
}

export type ElementalReactionElementId = ElementalReactionId | ElementId | ElementId[];
export type ElementalReactionId = typeof ElementalReactionIds[keyof typeof ElementalReactionIds];
