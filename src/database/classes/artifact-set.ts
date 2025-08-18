import type { ArtifactSet, ArtifactSetSlot } from "../types/artifact-set";
import type { ArtifactSlotKey } from "../types/artifact-slot";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { getArtifactSetRecommendations, getArtifactSlot } from "..";
import { publicImageSrc } from "@/lib/utils";

export class ArtifactSetClass implements ArtifactSet {
  readonly key: ArtifactSet["key"];
  readonly name: ArtifactSet["name"];
  readonly rarities: ArtifactSet["rarities"];
  readonly source: ArtifactSet["source"];
  readonly item_bonuses: ArtifactSet["item_bonuses"];
  readonly slots: ArtifactSet["slots"];
  private _character_recommendations: ArtifactSet["character_recommendations"];

  static PATH = "artifact-sets";

  constructor(
    key: ArtifactSet["key"],
    name: ArtifactSet["name"],
    rarities: ArtifactSet["rarities"],
    source: ArtifactSet["source"],
    itemBonuses: ArtifactSet["item_bonuses"],
    slots: Record<ArtifactSlotKey, ArtifactSetSlot["name"] | undefined>,
  ) {
    this.key = key;
    this.name = name;
    this.rarities = rarities;
    this.source = source;
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
        this.slots[slotKey] = ArtifactSetSlotClass.init([
          slotKey,
          slotName,
          publicImageSrc(`${ArtifactSetClass.PATH}/${key}/${slotKey}_icon.webp`),
        ]);
      }
    });
  }

  get character_recommendations() {
    return this._character_recommendations;
  }

  get image_src() {
    return this.slots[ArtifactSlotKeys.Flower]?.image_src || this.slots[ArtifactSlotKeys.Plume]?.image_src
      || this.slots[ArtifactSlotKeys.Sands]?.image_src || this.slots[ArtifactSlotKeys.Goblet]?.image_src
      || this.slots[ArtifactSlotKeys.Circlet]?.image_src;
  }

  getRecommendations() {
    return getArtifactSetRecommendations(this.key);
  }

  setCharacterRecommendations(val: NonNullable<ArtifactSet["character_recommendations"]>) {
    this._character_recommendations = val;

    return this;
  }

  static init(params: ConstructorParameters<typeof ArtifactSetClass>) {
    return new ArtifactSetClass(...params);
  }
}

export class ArtifactSetSlotClass implements ArtifactSetSlot {
  readonly key: ArtifactSetSlot["key"];
  readonly name: ArtifactSetSlot["name"];
  readonly image_src: ArtifactSetSlot["image_src"];

  constructor(
    key: ArtifactSetSlot["key"],
    name: ArtifactSetSlot["name"],
    imageSrc: ArtifactSetSlot["image_src"],
  ) {
    this.key = key;
    this.name = name;
    this.image_src = imageSrc;
  }

  async getSlot() {
    return await getArtifactSlot(this.key);
  }

  static init(params: ConstructorParameters<typeof ArtifactSetSlotClass>) {
    return new ArtifactSetSlotClass(...params);
  }
}
