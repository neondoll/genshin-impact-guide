import type { ELEMENTS } from "@/constants/elements";

export type ElementId = typeof ELEMENTS[keyof typeof ELEMENTS];

export interface Element {
  id: ElementId;
  name: string;
  imageSrc: string; // camelCase вместо snake_case
  iconSrc: string; // camelCase вместо snake_case
  iconWhiteSrc: string; // camelCase вместо snake_case
}

// Вспомогательные типы
export interface ElementWithMetadata extends Element {
  color: string;
  description?: string;
}

export type ElementMap = Record<ElementId, Element>;
