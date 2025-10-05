import type { Element as Type } from "@/types/element";
import { Element as Class } from "@/classes/element";
import { ElementIds } from "@/enums/element";

export default {
  [ElementIds.Anemo]: new Class(ElementIds.Anemo, "Анемо"),
  [ElementIds.Cryo]: new Class(ElementIds.Cryo, "Крио"),
  [ElementIds.Dendro]: new Class(ElementIds.Dendro, "Дендро"),
  [ElementIds.Electro]: new Class(ElementIds.Electro, "Электро"),
  [ElementIds.Geo]: new Class(ElementIds.Geo, "Гео"),
  [ElementIds.Hydro]: new Class(ElementIds.Hydro, "Гидро"),
  [ElementIds.Pyro]: new Class(ElementIds.Pyro, "Пиро"),
} as Record<Type["id"], Type>;
