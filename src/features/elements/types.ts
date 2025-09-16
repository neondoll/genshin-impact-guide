import { ElementIds } from "./enums";

export interface Element {
  id: ElementId;
  name: string;
  img_src: string;
  icon_src: string;
  icon_white_src: string;
}

export type ElementId = typeof ElementIds[keyof typeof ElementIds];
