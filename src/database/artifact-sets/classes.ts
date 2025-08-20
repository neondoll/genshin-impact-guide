import type { IArtifactSet, IArtifactSetSlot } from "./types";
import type { TArtifactSlotKey } from "../artifact-slots/types";
import { ArtifactSlotKeys } from "../artifact-slots/enums";
import { publicImageSrc } from "@/lib/utils";

export class CArtifactSet implements IArtifactSet {
  readonly key: IArtifactSet["key"];
  readonly name: IArtifactSet["name"];
  readonly rarities: IArtifactSet["rarities"];
  readonly sources: IArtifactSet["sources"];
  readonly item_bonuses: IArtifactSet["item_bonuses"];
  readonly slots: IArtifactSet["slots"];

  static PATH = "artifact-sets";

  constructor(
    key: IArtifactSet["key"],
    name: IArtifactSet["name"],
    rarities: IArtifactSet["rarities"],
    sources: IArtifactSet["sources"],
    itemBonuses: IArtifactSet["item_bonuses"],
    slots: Record<TArtifactSlotKey, IArtifactSetSlot["name"] | undefined>,
  ) {
    this.key = key;
    this.name = name;
    this.rarities = rarities;
    this.sources = sources;
    this.item_bonuses = itemBonuses;
    this.slots = {
      [ArtifactSlotKeys.Flower]: undefined,
      [ArtifactSlotKeys.Plume]: undefined,
      [ArtifactSlotKeys.Sands]: undefined,
      [ArtifactSlotKeys.Goblet]: undefined,
      [ArtifactSlotKeys.Circlet]: undefined,
    };

    (Object.entries(slots) as [keyof typeof slots, typeof slots[keyof typeof slots]][]).forEach(([slotKey, slotName]) => {
      if (slotName) {
        this.slots[slotKey] = CArtifactSetSlot.init([
          slotKey,
          slotName,
          publicImageSrc(`${CArtifactSet.PATH}/${key}/${slotKey}_icon.webp`),
        ]);
      }
    });
  }

  get image_src() {
    return this.slots[ArtifactSlotKeys.Flower]?.image_src || this.slots[ArtifactSlotKeys.Plume]?.image_src
      || this.slots[ArtifactSlotKeys.Sands]?.image_src || this.slots[ArtifactSlotKeys.Goblet]?.image_src
      || this.slots[ArtifactSlotKeys.Circlet]?.image_src;
  }

  // getRecommendations() {
  //   return artifactSetsRecommendationsSelectors.selectById(store.getState(), this.key);
  // }

  static init(params: ConstructorParameters<typeof CArtifactSet>) {
    return new CArtifactSet(...params);
  }
}

export class CArtifactSetSlot implements IArtifactSetSlot {
  readonly key: IArtifactSetSlot["key"];
  readonly name: IArtifactSetSlot["name"];
  readonly image_src: IArtifactSetSlot["image_src"];

  constructor(
    key: IArtifactSetSlot["key"],
    name: IArtifactSetSlot["name"],
    imageSrc: IArtifactSetSlot["image_src"],
  ) {
    this.key = key;
    this.name = name;
    this.image_src = imageSrc;
  }

  // getSlot() {
  //   return selectArtifactSlotById(this.key);
  // }

  static init(params: ConstructorParameters<typeof CArtifactSetSlot>) {
    return new CArtifactSetSlot(...params);
  }
}
