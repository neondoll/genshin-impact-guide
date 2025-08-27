import type { Element } from "./types";
import { ElementIds } from "./enums";
import { publicImageSrc } from "@/lib/utils";
import { RegionIds } from "../regions/enums";

class ElementClass implements Element {
  readonly id: Element["id"];
  readonly name: Element["name"];
  readonly image_src: Element["image_src"];
  readonly region_id: Element["region_id"];
  readonly reacts_with: Element["reacts_with"];

  static PATH = "elements";

  constructor(
    id: Element["id"],
    name: Element["name"],
    regionId: Element["region_id"],
    reactsWith: Element["reacts_with"],
  ) {
    this.id = id;
    this.name = name;
    this.image_src = publicImageSrc(`${ElementClass.PATH}/${id}-84x84.png`);
    this.region_id = regionId;
    this.reacts_with = reactsWith;
  }

  static init(params: ConstructorParameters<typeof ElementClass>) {
    return new ElementClass(...params);
  }
}

export default {
  [ElementIds.Anemo]: ElementClass.init([
    ElementIds.Anemo,
    "Анемо",
    RegionIds.Mondstadt,
    [ElementIds.Electro, ElementIds.Hydro, ElementIds.Pyro, ElementIds.Cryo],
  ]),
  [ElementIds.Cryo]: ElementClass.init([
    ElementIds.Cryo,
    "Крио",
    RegionIds.Snezhnaya,
    [ElementIds.Anemo, ElementIds.Geo, ElementIds.Electro, ElementIds.Hydro, ElementIds.Pyro],
  ]),
  [ElementIds.Dendro]: ElementClass.init([
    ElementIds.Dendro,
    "Дендро",
    RegionIds.Sumeru,
    [ElementIds.Electro, ElementIds.Hydro, ElementIds.Pyro],
  ]),
  [ElementIds.Electro]: ElementClass.init([
    ElementIds.Electro,
    "Электро",
    RegionIds.Inazuma,
    [ElementIds.Anemo, ElementIds.Geo, ElementIds.Dendro, ElementIds.Hydro, ElementIds.Pyro, ElementIds.Cryo],
  ]),
  [ElementIds.Geo]: ElementClass.init([
    ElementIds.Geo,
    "Гео",
    RegionIds.Liyue,
    [ElementIds.Electro, ElementIds.Hydro, ElementIds.Pyro, ElementIds.Cryo],
  ]),
  [ElementIds.Hydro]: ElementClass.init([
    ElementIds.Hydro,
    "Гидро",
    RegionIds.Fontaine,
    [ElementIds.Anemo, ElementIds.Geo, ElementIds.Electro, ElementIds.Dendro, ElementIds.Pyro, ElementIds.Cryo],
  ]),
  [ElementIds.Pyro]: ElementClass.init([
    ElementIds.Pyro,
    "Пиро",
    RegionIds.Natlan,
    [ElementIds.Anemo, ElementIds.Geo, ElementIds.Electro, ElementIds.Dendro, ElementIds.Hydro, ElementIds.Cryo],
  ]),
} as Record<Element["id"], Element>;
