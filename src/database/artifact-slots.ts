import { ArtifactSlotKeys } from "./enums/artifact-slot";
import { publicImageSrc } from "@/lib/utils";
import type { ArtifactSlot, ArtifactSlotKey } from "./types/artifact-slot";

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`artifact-slots/${src}`);

export default {
  [ArtifactSlotKeys.CircletOfLogos]: {
    key: ArtifactSlotKeys.CircletOfLogos,
    name: "Корона разума",
    image_src: imageSrc("circlet_of_logos-64x64.png"),
    sort_by: 5,
  },
  [ArtifactSlotKeys.Flower]: {
    key: ArtifactSlotKeys.Flower,
    name: "Цветок жизни",
    image_src: imageSrc("flower-64x64.png"),
    sort_by: 1,
  },
  [ArtifactSlotKeys.GobletOfEonothem]: {
    key: ArtifactSlotKeys.GobletOfEonothem,
    name: "Кубок пространства",
    image_src: imageSrc("goblet_of_eonothem-64x64.png"),
    sort_by: 4,
  },
  [ArtifactSlotKeys.PlumeOfDeath]: {
    key: ArtifactSlotKeys.PlumeOfDeath,
    name: "Перо смерти",
    image_src: imageSrc("plume_of_death-64x64.png"),
    sort_by: 2,
  },
  [ArtifactSlotKeys.SandsOfEon]: {
    key: ArtifactSlotKeys.SandsOfEon,
    name: "Пески времени",
    image_src: imageSrc("sands_of_eon-64x64.png"),
    sort_by: 3,
  },
} as Record<ArtifactSlotKey, ArtifactSlot>;
