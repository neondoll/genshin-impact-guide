import { ElementUidEnum } from "./enums/elements";
import { publicImageSrc } from "@/lib/utils";
import { RegionUidEnum } from "./enums/regions";
import type { Elements } from "./types/elements";

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`elements/${src}`);

export const elements = {
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
