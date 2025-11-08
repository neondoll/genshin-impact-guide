import type { ArtifactSet as ArtifactSetType, ArtifactSetSlot as ArtifactSetSlotType } from "@/types/artifact-set";
import type { ArtifactSlotId } from "@/types/artifact";
import { ARTIFACT_SLOTS } from "@/constants/artifact-slots";
import { publicImageSrc } from "@/lib/utils";

export class ArtifactSet implements ArtifactSetType {
  readonly id: ArtifactSetType["id"];
  readonly name: ArtifactSetType["name"];
  readonly rarities: ArtifactSetType["rarities"];
  readonly sources: ArtifactSetType["sources"];
  readonly itemBonuses: ArtifactSetType["itemBonuses"];
  readonly slots: ArtifactSetType["slots"];

  static readonly PATH = "artifact-sets";

  constructor(
    id: ArtifactSetType["id"],
    name: ArtifactSetType["name"],
    rarities: ArtifactSetType["rarities"],
    sources: ArtifactSetType["sources"],
    itemBonuses: ArtifactSetType["itemBonuses"],
    slots: Partial<Record<ArtifactSlotId, string>>, // Более точный тип
  ) {
    this.id = id;
    this.name = name;
    this.rarities = rarities;
    this.sources = sources;
    this.itemBonuses = itemBonuses;

    // Инициализация слотов с правильной типизацией
    this.slots = this.initializeSlots(slots);
  }

  private initializeSlots(slotNames: Partial<Record<ArtifactSlotId, string>>): ArtifactSetType["slots"] {
    const slots: ArtifactSetType["slots"] = {
      [ARTIFACT_SLOTS.FLOWER]: undefined,
      [ARTIFACT_SLOTS.PLUME]: undefined,
      [ARTIFACT_SLOTS.SANDS]: undefined,
      [ARTIFACT_SLOTS.GOBLET]: undefined,
      [ARTIFACT_SLOTS.CIRCLET]: undefined,
    };

    (Object.entries(slotNames) as [ArtifactSlotId, string][]).forEach(([slotId, slotName]) => {
      if (slotName) {
        slots[slotId] = ArtifactSetSlot.create(
          slotId,
          slotName,
          publicImageSrc(`${ArtifactSet.PATH}/${this.id}/${slotId}_icon.webp`),
        );
      }
    });

    return slots;
  }

  get imageSrc(): string | undefined {
    // Поиск первого доступного изображения слота
    const availableSlots = Object.values(this.slots).filter(Boolean) as ArtifactSetSlot[];

    return availableSlots[0]?.imageSrc;
  }

  getSlot(slotId: ArtifactSlotId): ArtifactSetSlot | undefined {
    return this.slots[slotId] ?? undefined;
  }

  hasSlot(slotId: ArtifactSlotId): boolean {
    return this.slots[slotId] !== undefined;
  }

  getAvailableSlots(): ArtifactSetSlot[] {
    return Object.values(this.slots).filter(Boolean) as ArtifactSetSlot[];
  }

  static create(...params: ConstructorParameters<typeof ArtifactSet>): ArtifactSet {
    return new ArtifactSet(...params);
  }
}

export class ArtifactSetSlot implements ArtifactSetSlotType {
  readonly id: ArtifactSetSlotType["id"];
  readonly name: ArtifactSetSlotType["name"];
  readonly imageSrc: ArtifactSetSlotType["imageSrc"];

  constructor(id: ArtifactSetSlotType["id"], name: ArtifactSetSlotType["name"], imageSrc: ArtifactSetSlotType["imageSrc"]) {
    this.id = id;
    this.name = name;
    this.imageSrc = imageSrc;
  }

  static create(id: ArtifactSlotId, name: string, imageSrc: string): ArtifactSetSlot {
    return new ArtifactSetSlot(id, name, imageSrc);
  }
}
