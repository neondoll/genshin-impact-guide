import { ElementKeys } from "./enums/element";
import { publicImageSrc } from "@/lib/utils";
import { RegionKeys } from "./enums/region";
import type { Element } from "./types/element";

class _Element implements Element {
  readonly key: Element["key"];
  readonly name: Element["name"];
  readonly image_src: Element["image_src"];
  readonly region_key: Element["region_key"];
  readonly reacts_with: Element["reacts_with"];

  constructor(
    key: keyof typeof ElementKeys,
    name: Element["name"],
    regionKey: keyof typeof RegionKeys,
    reactsWith: (keyof typeof ElementKeys)[],
  ) {
    this.key = ElementKeys[key];
    this.name = name;
    this.image_src = publicImageSrc(`elements/${this.key}-84x84.png`);
    this.region_key = RegionKeys[regionKey];
    this.reacts_with = reactsWith.map(reactWith => ElementKeys[reactWith]);
  }
}

export default {
  [ElementKeys["🍃"]]: new _Element("🍃", "Анемо", "Mondstadt", ["⚡️", "💧", "🔥", "❄️"]),
  [ElementKeys["❄️"]]: new _Element("❄️", "Крио", "Snezhnaya", ["🍃", "🪨", "⚡️", "💧", "🔥"]),
  [ElementKeys["🌿"]]: new _Element("🌿", "Дендро", "Sumeru", ["⚡️", "💧", "🔥"]),
  [ElementKeys["⚡️"]]: new _Element("⚡️", "Электро", "Inazuma", ["🍃", "🪨", "🌿", "💧", "🔥", "❄️"]),
  [ElementKeys["🪨"]]: new _Element("🪨", "Гео", "Liyue", ["⚡️", "💧", "🔥", "❄️"]),
  [ElementKeys["💧"]]: new _Element("💧", "Гидро", "Fontaine", ["🍃", "🪨", "⚡️", "🌿", "🔥", "❄️"]),
  [ElementKeys["🔥"]]: new _Element("🔥", "Пиро", "Natlan", ["🍃", "🪨", "⚡️", "🌿", "💧", "❄️"]),
} as Record<Element["key"], Element>;
