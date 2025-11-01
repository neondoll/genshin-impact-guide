import type { ArtifactSet as Type, ArtifactSetSlot as TypeSlot } from "@/types/artifact-set";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { publicImageSrc } from "@/lib/utils";

export class ArtifactSet implements Type {
  readonly id: Type["id"];
  readonly name: Type["name"];
  readonly rarities: Type["rarities"];
  readonly sources: Type["sources"];
  readonly item_bonuses: Type["item_bonuses"];
  readonly slots: Type["slots"];

  static PATH = "artifact-sets";

  constructor(
    id: Type["id"],
    name: Type["name"],
    rarities: Type["rarities"],
    sources: Type["sources"],
    itemBonuses: Type["item_bonuses"],
    slots: Record<TypeSlot["id"], TypeSlot["name"] | undefined>,
  ) {
    this.id = id;
    this.name = name;
    this.rarities = rarities;
    this.sources = sources;
    this.item_bonuses = itemBonuses;
    this.slots = {
      [ArtifactSlotIds.Flower]: undefined,
      [ArtifactSlotIds.Plume]: undefined,
      [ArtifactSlotIds.Sands]: undefined,
      [ArtifactSlotIds.Goblet]: undefined,
      [ArtifactSlotIds.Circlet]: undefined,
    };

    (
      Object.entries(slots) as [
        keyof typeof slots,
        (typeof slots)[keyof typeof slots]
      ][]
    ).forEach(([slotId, slotName]) => {
      if (slotName) {
        this.slots[slotId] = ArtifactSetSlot.init([
          slotId,
          slotName,
          publicImageSrc(`${ArtifactSet.PATH}/${id}/${slotId}_icon.webp`),
        ]);
      }
    });
  }

  get image_src() {
    return (
      this.slots[ArtifactSlotIds.Flower]?.image_src
      || this.slots[ArtifactSlotIds.Plume]?.image_src
      || this.slots[ArtifactSlotIds.Sands]?.image_src
      || this.slots[ArtifactSlotIds.Goblet]?.image_src
      || this.slots[ArtifactSlotIds.Circlet]?.image_src
    );
  }

  static init(params: ConstructorParameters<typeof ArtifactSet>) {
    return new ArtifactSet(...params);
  }
}

export class ArtifactSetSlot implements TypeSlot {
  readonly id: TypeSlot["id"];
  readonly name: TypeSlot["name"];
  readonly image_src: TypeSlot["image_src"];

  constructor(
    id: TypeSlot["id"],
    name: TypeSlot["name"],
    imageSrc: TypeSlot["image_src"]
  ) {
    this.id = id;
    this.name = name;
    this.image_src = imageSrc;
  }

  static init(params: ConstructorParameters<typeof ArtifactSetSlot>) {
    return new ArtifactSetSlot(...params);
  }
}
