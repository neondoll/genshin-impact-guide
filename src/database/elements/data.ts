import type { IElement } from "./types";
import { CElement } from "./classes";
import { ElementKeys } from "./enums";
import { RegionKeys } from "../regions/enums";

export default {
  [ElementKeys.Anemo]: CElement.init([
    ElementKeys.Anemo,
    "Анемо",
    RegionKeys.Mondstadt,
    [ElementKeys.Electro, ElementKeys.Hydro, ElementKeys.Pyro, ElementKeys.Cryo],
  ]),
  [ElementKeys.Cryo]: CElement.init([
    ElementKeys.Cryo,
    "Крио",
    RegionKeys.Snezhnaya,
    [ElementKeys.Anemo, ElementKeys.Geo, ElementKeys.Electro, ElementKeys.Hydro, ElementKeys.Pyro],
  ]),
  [ElementKeys.Dendro]: CElement.init([
    ElementKeys.Dendro,
    "Дендро",
    RegionKeys.Sumeru,
    [ElementKeys.Electro, ElementKeys.Hydro, ElementKeys.Pyro],
  ]),
  [ElementKeys.Electro]: CElement.init([
    ElementKeys.Electro,
    "Электро",
    RegionKeys.Inazuma,
    [ElementKeys.Anemo, ElementKeys.Geo, ElementKeys.Dendro, ElementKeys.Hydro, ElementKeys.Pyro, ElementKeys.Cryo],
  ]),
  [ElementKeys.Geo]: CElement.init([
    ElementKeys.Geo,
    "Гео",
    RegionKeys.Liyue,
    [ElementKeys.Electro, ElementKeys.Hydro, ElementKeys.Pyro, ElementKeys.Cryo],
  ]),
  [ElementKeys.Hydro]: CElement.init([
    ElementKeys.Hydro,
    "Гидро",
    RegionKeys.Fontaine,
    [ElementKeys.Anemo, ElementKeys.Geo, ElementKeys.Electro, ElementKeys.Dendro, ElementKeys.Pyro, ElementKeys.Cryo],
  ]),
  [ElementKeys.Pyro]: CElement.init([
    ElementKeys.Pyro,
    "Пиро",
    RegionKeys.Natlan,
    [ElementKeys.Anemo, ElementKeys.Geo, ElementKeys.Electro, ElementKeys.Dendro, ElementKeys.Hydro, ElementKeys.Cryo],
  ]),
} as Record<IElement["key"], IElement>;
