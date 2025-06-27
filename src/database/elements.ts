import { publicImageSrc } from "@/lib/utils";
import { type RegionUid, RegionUidEnum } from "./regions";

type Element = { name: string; region_uid: RegionUid; image_src: string };
type Elements = Record<ElementUid, Element>;

export type ElementUid = typeof ElementUidEnum[keyof typeof ElementUidEnum];

export const ElementUidEnum = {
  /* Анемо   */ Anemo: "anemo",
  /* Крио    */ Cryo: "cryo",
  /* Дендро  */ Dendro: "dendro",
  /* Электро */ Electro: "electro",
  /* Гео     */ Geo: "geo",
  /* Гидро   */ Hydro: "hydro",
  /* Пиро    */ Pyro: "pyro",
} as const;

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`elements/${src}`);

const elements = {
  [ElementUidEnum.Anemo]: {
    name: "Анемо",
    region_uid: RegionUidEnum.Mondstadt,
    image_src: imageSrc("anemo-64x64.png"),
  },
  [ElementUidEnum.Geo]: { name: "Гео", region_uid: RegionUidEnum.Liyue, image_src: imageSrc("geo-64x64.png") },
  [ElementUidEnum.Electro]: {
    name: "Электро",
    region_uid: RegionUidEnum.Inazuma,
    image_src: imageSrc("electro-64x64.png"),
  },
  [ElementUidEnum.Dendro]: {
    name: "Дендро",
    region_uid: RegionUidEnum.Sumeru,
    image_src: imageSrc("dendro-64x64.png"),
  },
  [ElementUidEnum.Hydro]: { name: "Гидро", region_uid: RegionUidEnum.Fontaine, image_src: imageSrc("hydro-64x64.png") },
  [ElementUidEnum.Pyro]: { name: "Пиро", region_uid: RegionUidEnum.Natlan, image_src: imageSrc("pyro-64x64.png") },
  [ElementUidEnum.Cryo]: { name: "Крио", region_uid: RegionUidEnum.Snezhnaya, image_src: imageSrc("cryo-64x64.png") },
} as Elements;

export function getElements() {
  return elements;
}
