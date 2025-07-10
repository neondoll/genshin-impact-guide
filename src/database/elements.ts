import { ElementUidEnum } from "./enums/element";
import { publicImageSrc } from "@/lib/utils";
import { RegionUidEnum } from "./enums/region";
import type { Element, ElementUid } from "./types/element";

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`elements/${src}`);

export default {
  [ElementUidEnum.Anemo]: {
    uid: ElementUidEnum.Anemo,
    name: "Анемо",
    image_src: imageSrc("anemo-84x84.png"),
    region_uid: RegionUidEnum.Mondstadt,
    reacts_with: [ElementUidEnum.Electro, ElementUidEnum.Hydro, ElementUidEnum.Pyro, ElementUidEnum.Cryo],
  },
  [ElementUidEnum.Cryo]: {
    uid: ElementUidEnum.Cryo,
    name: "Крио",
    image_src: imageSrc("cryo-84x84.png"),
    region_uid: RegionUidEnum.Snezhnaya,
    reacts_with: [ElementUidEnum.Anemo, ElementUidEnum.Geo, ElementUidEnum.Electro, ElementUidEnum.Hydro, ElementUidEnum.Pyro],
  },
  [ElementUidEnum.Dendro]: {
    uid: ElementUidEnum.Dendro,
    name: "Дендро",
    image_src: imageSrc("dendro-84x84.png"),
    region_uid: RegionUidEnum.Sumeru,
    reacts_with: [ElementUidEnum.Electro, ElementUidEnum.Hydro, ElementUidEnum.Pyro],
  },
  [ElementUidEnum.Electro]: {
    uid: ElementUidEnum.Electro,
    name: "Электро",
    image_src: imageSrc("electro-84x84.png"),
    region_uid: RegionUidEnum.Inazuma,
    reacts_with: [ElementUidEnum.Anemo, ElementUidEnum.Geo, ElementUidEnum.Dendro, ElementUidEnum.Hydro, ElementUidEnum.Pyro, ElementUidEnum.Cryo],
  },
  [ElementUidEnum.Geo]: {
    uid: ElementUidEnum.Geo,
    name: "Гео",
    image_src: imageSrc("geo-84x84.png"),
    region_uid: RegionUidEnum.Liyue,
    reacts_with: [ElementUidEnum.Electro, ElementUidEnum.Hydro, ElementUidEnum.Pyro, ElementUidEnum.Cryo],
  },
  [ElementUidEnum.Hydro]: {
    uid: ElementUidEnum.Hydro,
    name: "Гидро",
    image_src: imageSrc("hydro-84x84.png"),
    region_uid: RegionUidEnum.Fontaine,
    reacts_with: [ElementUidEnum.Anemo, ElementUidEnum.Geo, ElementUidEnum.Electro, ElementUidEnum.Dendro, ElementUidEnum.Pyro, ElementUidEnum.Cryo],
  },
  [ElementUidEnum.Pyro]: {
    uid: ElementUidEnum.Pyro,
    name: "Пиро",
    image_src: imageSrc("pyro-84x84.png"),
    region_uid: RegionUidEnum.Natlan,
    reacts_with: [ElementUidEnum.Anemo, ElementUidEnum.Geo, ElementUidEnum.Electro, ElementUidEnum.Dendro, ElementUidEnum.Hydro, ElementUidEnum.Cryo],
  },
} as Record<ElementUid, Element>;
