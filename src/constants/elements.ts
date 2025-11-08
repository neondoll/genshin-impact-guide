export const ELEMENTS = {
  ANEMO: "anemo",
  CRYO: "cryo",
  DENDRO: "dendro",
  ELECTRO: "electro",
  GEO: "geo",
  HYDRO: "hydro",
  PYRO: "pyro",
} as const;

export type Element = typeof ELEMENTS[keyof typeof ELEMENTS];

export const ELEMENT_LABELS: Record<Element, string> = {
  [ELEMENTS.ANEMO]: "Анемо",
  [ELEMENTS.CRYO]: "Крио",
  [ELEMENTS.DENDRO]: "Дендро",
  [ELEMENTS.ELECTRO]: "Электро",
  [ELEMENTS.GEO]: "Гео",
  [ELEMENTS.HYDRO]: "Гидро",
  [ELEMENTS.PYRO]: "Пиро",
} as const;

export const ELEMENT_COLORS: Record<Element, string> = {
  [ELEMENTS.ANEMO]: "#74C2A8", // зеленый
  [ELEMENTS.CRYO]: "#9FCDE9", // голубой
  [ELEMENTS.DENDRO]: "#A5C83B", // салатовый
  [ELEMENTS.ELECTRO]: "#B68FCE", // фиолетовый
  [ELEMENTS.GEO]: "#F8B76B", // оранжевый
  [ELEMENTS.HYDRO]: "#4EC8F0", // синий
  [ELEMENTS.PYRO]: "#EF7D2F", // красный
} as const;

export const ELEMENT_ICONS: Record<Element, string> = {
  [ELEMENTS.ANEMO]: "🌪️",
  [ELEMENTS.CRYO]: "❄️",
  [ELEMENTS.DENDRO]: "🌿",
  [ELEMENTS.ELECTRO]: "⚡",
  [ELEMENTS.GEO]: "⛰️",
  [ELEMENTS.HYDRO]: "💧",
  [ELEMENTS.PYRO]: "🔥",
} as const;

// Группировка элементов
export const REACTIVE_ELEMENTS = [
  ELEMENTS.HYDRO,
  ELEMENTS.PYRO,
  ELEMENTS.CRYO,
  ELEMENTS.ELECTRO,
  ELEMENTS.DENDRO,
] as const;

export const CATALYST_ELEMENTS = [
  ELEMENTS.ANEMO,
  ELEMENTS.GEO,
] as const;

// Реакции и взаимодействия
export const ELEMENT_REACTIONS: Partial<Record<Element, Element[]>> = {
  [ELEMENTS.PYRO]: [ELEMENTS.HYDRO, ELEMENTS.CRYO, ELEMENTS.ELECTRO, ELEMENTS.DENDRO],
  [ELEMENTS.HYDRO]: [ELEMENTS.PYRO, ELEMENTS.CRYO, ELEMENTS.ELECTRO, ELEMENTS.DENDRO],
  [ELEMENTS.ELECTRO]: [ELEMENTS.PYRO, ELEMENTS.HYDRO, ELEMENTS.CRYO, ELEMENTS.DENDRO],
  [ELEMENTS.CRYO]: [ELEMENTS.PYRO, ELEMENTS.HYDRO, ELEMENTS.ELECTRO],
  [ELEMENTS.DENDRO]: [ELEMENTS.PYRO, ELEMENTS.HYDRO, ELEMENTS.ELECTRO],
} as const;

// Валидация и утилиты
export const isValidElement = (element: string): element is Element => {
  return Object.values(ELEMENTS).includes(element as Element);
};

export const getElementColor = (element: Element): string => {
  return ELEMENT_COLORS[element];
};

export const getElementLabel = (element: Element): string => {
  return ELEMENT_LABELS[element];
};

// Порядок отображения элементов
export const ELEMENT_ORDER: Element[] = [
  ELEMENTS.PYRO,
  ELEMENTS.HYDRO,
  ELEMENTS.ELECTRO,
  ELEMENTS.CRYO,
  ELEMENTS.DENDRO,
  ELEMENTS.ANEMO,
  ELEMENTS.GEO,
];
