import type { ElementId } from "../elements/types";
import { ElementalReactionIds } from "./enums";

export interface ElementalReaction {
  id: ElementalReactionId;
  name: string;
  first_element_id: ElementalReactionElementId;
  second_element_id: ElementalReactionElementId;
}

export type ElementalReactionElementId = ElementalReactionId | ElementId | ElementId[];
export type ElementalReactionId = typeof ElementalReactionIds[keyof typeof ElementalReactionIds];
