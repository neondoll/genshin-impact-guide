import type { Element as Type } from "@/types/element";
import { Element as Class } from "@/classes/element";
import { ELEMENTS } from "@/constants/elements";

export default {
  [ELEMENTS.ANEMO]: new Class(ELEMENTS.ANEMO, "Анемо"),
  [ELEMENTS.CRYO]: new Class(ELEMENTS.CRYO, "Крио"),
  [ELEMENTS.DENDRO]: new Class(ELEMENTS.DENDRO, "Дендро"),
  [ELEMENTS.ELECTRO]: new Class(ELEMENTS.ELECTRO, "Электро"),
  [ELEMENTS.GEO]: new Class(ELEMENTS.GEO, "Гео"),
  [ELEMENTS.HYDRO]: new Class(ELEMENTS.HYDRO, "Гидро"),
  [ELEMENTS.PYRO]: new Class(ELEMENTS.PYRO, "Пиро"),
} as Record<Type["id"], Type>;
