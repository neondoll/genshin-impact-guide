import { ElementKeys } from "./enums/element";
import { publicImageSrc } from "@/lib/utils";
import { RegionKeys } from "./enums/region";
import type { Element, ElementKey } from "./types/element";

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`elements/${src}`);

export default {
  [ElementKeys.Anemo]: {
    key: ElementKeys.Anemo,
    name: "Анемо",
    image_src: imageSrc("anemo-84x84.png"),
    region_key: RegionKeys.Mondstadt,
    reacts_with: [ElementKeys.Electro, ElementKeys.Hydro, ElementKeys.Pyro, ElementKeys.Cryo],
  },
  [ElementKeys.Cryo]: {
    key: ElementKeys.Cryo,
    name: "Крио",
    image_src: imageSrc("cryo-84x84.png"),
    region_key: RegionKeys.Snezhnaya,
    reacts_with: [ElementKeys.Anemo, ElementKeys.Geo, ElementKeys.Electro, ElementKeys.Hydro, ElementKeys.Pyro],
  },
  [ElementKeys.Dendro]: {
    key: ElementKeys.Dendro,
    name: "Дендро",
    image_src: imageSrc("dendro-84x84.png"),
    region_key: RegionKeys.Sumeru,
    reacts_with: [ElementKeys.Electro, ElementKeys.Hydro, ElementKeys.Pyro],
  },
  [ElementKeys.Electro]: {
    key: ElementKeys.Electro,
    name: "Электро",
    image_src: imageSrc("electro-84x84.png"),
    region_key: RegionKeys.Inazuma,
    reacts_with: [ElementKeys.Anemo, ElementKeys.Geo, ElementKeys.Dendro, ElementKeys.Hydro, ElementKeys.Pyro, ElementKeys.Cryo],
  },
  [ElementKeys.Geo]: {
    key: ElementKeys.Geo,
    name: "Гео",
    image_src: imageSrc("geo-84x84.png"),
    region_key: RegionKeys.Liyue,
    reacts_with: [ElementKeys.Electro, ElementKeys.Hydro, ElementKeys.Pyro, ElementKeys.Cryo],
  },
  [ElementKeys.Hydro]: {
    key: ElementKeys.Hydro,
    name: "Гидро",
    image_src: imageSrc("hydro-84x84.png"),
    region_key: RegionKeys.Fontaine,
    reacts_with: [ElementKeys.Anemo, ElementKeys.Geo, ElementKeys.Electro, ElementKeys.Dendro, ElementKeys.Pyro, ElementKeys.Cryo],
  },
  [ElementKeys.Pyro]: {
    key: ElementKeys.Pyro,
    name: "Пиро",
    image_src: imageSrc("pyro-84x84.png"),
    region_key: RegionKeys.Natlan,
    reacts_with: [ElementKeys.Anemo, ElementKeys.Geo, ElementKeys.Electro, ElementKeys.Dendro, ElementKeys.Hydro, ElementKeys.Cryo],
  },
} as Record<ElementKey, Element>;
