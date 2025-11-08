import type { ArtifactSet, ArtifactSetFilter, ArtifactSetSlot } from "./types";
import { ARTIFACT_SLOTS } from "../artifact-slots";
import { publicImageSrc } from "@/lib/utils";

export const createArtifactSetSlot = (
  id: ArtifactSetSlot["id"],
  name: ArtifactSetSlot["name"],
  imageSrc: ArtifactSetSlot["imageSrc"],
): ArtifactSetSlot => {
  return { id, name, imageSrc };
};

export const createArtifactSet = (
  id: ArtifactSet["id"],
  name: ArtifactSet["name"],
  rarities: ArtifactSet["rarities"],
  sources: ArtifactSet["sources"],
  itemBonuses: ArtifactSet["itemBonuses"],
  slots: Partial<Record<ArtifactSetSlot["id"], ArtifactSetSlot["name"]>>,
): ArtifactSet => {
  const _slots: ArtifactSet["slots"] = {
    [ARTIFACT_SLOTS.FLOWER]: undefined,
    [ARTIFACT_SLOTS.PLUME]: undefined,
    [ARTIFACT_SLOTS.SANDS]: undefined,
    [ARTIFACT_SLOTS.GOBLET]: undefined,
    [ARTIFACT_SLOTS.CIRCLET]: undefined,
  };

  // Заполняем доступные слоты
  (Object.entries(slots) as [ArtifactSetSlot["id"], ArtifactSetSlot["name"]][]).forEach(([slotId, slotName]) => {
    if (slotName) {
      _slots[slotId] = createArtifactSetSlot(slotId, slotName, publicImageSrc(`artifact-sets/${id}/${slotId}_icon.webp`));
    }
  });

  // Находим первое доступное изображение для общего изображения набора
  const imageSrc = Object.values(_slots).find((slot) => slot?.imageSrc)?.imageSrc;

  return { id, name, rarities, sources, itemBonuses, slots: _slots, imageSrc };
};

export const getArtifactSetBonusDescription = (set: ArtifactSet, bonusType: 2 | 4): string => {
  return set.itemBonuses[bonusType];
};
export const getArtifactSetMaxRarity = (set: ArtifactSet): number => Math.max(...set.rarities);
export const getArtifactSetSlot = (set: ArtifactSet, slotId: ArtifactSetSlot["id"]): ArtifactSetSlot | undefined => {
  return set.slots[slotId] ?? undefined;
};
export const getAvailableArtifactSetSlots = (set: ArtifactSet): ArtifactSetSlot[] => {
  return Object.values(set.slots).filter(Boolean) as ArtifactSetSlot[];
};
export const hasArtifactSetBonus = (set: ArtifactSet, bonusType: 2 | 4): boolean => {
  return bonusType in set.itemBonuses;
};
export const hasArtifactSetSlot = (set: ArtifactSet, slotId: ArtifactSetSlot["id"]): boolean => {
  return set.slots[slotId] !== undefined;
};

export const filterArtifactSets = (sets: ArtifactSet[], filter: ArtifactSetFilter): ArtifactSet[] => {
  return sets.filter((set) => {
    // Фильтр по редкости
    if (filter.rarities && filter.rarities.length > 0) {
      const hasMatchingRarity = set.rarities.some((rarity) => filter.rarities!.includes(rarity));

      if (!hasMatchingRarity) return false;
    }

    // Фильтр по источникам
    if (filter.sources && filter.sources.length > 0) {
      const hasMatchingSource = set.sources.some((source) => filter.sources!.some((filterSource) => source.includes(filterSource)));

      if (!hasMatchingSource) return false;
    }

    // Поиск по названию
    if (filter.search) {
      const searchLower = filter.search.toLowerCase();
      const matchesName = set.name.toLowerCase().includes(searchLower);
      const matchesId = set.id.toLowerCase().includes(searchLower);

      if (!matchesName && !matchesId) return false;
    }

    return true;
  });
};
