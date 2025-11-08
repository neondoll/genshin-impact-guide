import type { ArtifactSlot, ArtifactSlotMap } from "./types";
import { ARTIFACT_SLOTS } from "./types";
import { ArtifactSlotEntity, compareArtifactSlots } from "./lib";

export const createArtifactSlotData = (): ArtifactSlotMap => ({
  [ARTIFACT_SLOTS.FLOWER]: ArtifactSlotEntity.create({
    id: ARTIFACT_SLOTS.FLOWER,
    imageSrc: "https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Icon_Flower_of_Life.png/revision/latest?cb=20210712005358",
    sortOrder: 1,
  }),
  [ARTIFACT_SLOTS.PLUME]: ArtifactSlotEntity.create({
    id: ARTIFACT_SLOTS.PLUME,
    imageSrc: "https://static.wikia.nocookie.net/gensin-impact/images/8/8b/Icon_Plume_of_Death.png/revision/latest?cb=20210712005411",
    sortOrder: 2,
  }),
  [ARTIFACT_SLOTS.SANDS]: ArtifactSlotEntity.create({
    id: ARTIFACT_SLOTS.SANDS,
    imageSrc: "https://static.wikia.nocookie.net/gensin-impact/images/9/9f/Icon_Sands_of_Eon.png/revision/latest?cb=20210713185616",
    sortOrder: 3,
  }),
  [ARTIFACT_SLOTS.GOBLET]: ArtifactSlotEntity.create({
    id: ARTIFACT_SLOTS.GOBLET,
    imageSrc: "https://static.wikia.nocookie.net/gensin-impact/images/3/37/Icon_Goblet_of_Eonothem.png/revision/latest?cb=20210713185527",
    sortOrder: 4,
  }),
  [ARTIFACT_SLOTS.CIRCLET]: ArtifactSlotEntity.create({
    id: ARTIFACT_SLOTS.CIRCLET,
    imageSrc: "https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_Circlet_of_Logos.png/revision/latest?cb=20210712005353",
    sortOrder: 5,
  }),
});

export const artifactSlotsData = createArtifactSlotData();

export const getArtifactSlotById = (id: ArtifactSlot["id"]): ArtifactSlot => {
  const slot = artifactSlotsData[id];

  if (!slot) {
    throw new Error(`Artifact slot with id "${id}" not found`);
  }

  return slot;
};
export const getArtifactSlotIds = (): ArtifactSlot["id"][] => {
  return Object.keys(artifactSlotsData) as ArtifactSlot["id"][];
};
export const getArtifactSlotsArray = (): ArtifactSlot[] => {
  return Object.values(artifactSlotsData).sort(compareArtifactSlots);
};
