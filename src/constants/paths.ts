import type { ArtifactSet } from "@/features/artifact-sets/types";
import type { Character } from "@/features/characters/types";
import type { ElementalReaction } from "@/features/elemental-reactions/types";
import type { Resource } from "@/features/resources/types";
import type { Weapon } from "@/features/weapons/types";

export default {
  ArtifactSet: {
    title: (item: ArtifactSet) => item.name,
    to: (id: ArtifactSet["id"] | string) => `/artifact-sets/${id}`,
  },
  ArtifactSets: { title: "Артефакты", to: "/artifact-sets" },
  Character: {
    title: (item: Character) => item.title,
    to: (id: Character["id"] | string) => `/characters/${id}`,
  },
  Characters: { title: "Персонажи", to: "/characters" },
  ElementalReaction: {
    title: (item: ElementalReaction) => item.name,
    to: (id: ElementalReaction["id"] | string) => `/elemental-reactions/${id}`,
  },
  Resource: {
    title: (item: Resource) => item.name,
    to: (id: Resource["id"] | string) => `/resources/${id}`,
  },
  Resources: { title: "Материалы", to: "/resources" },
  Root: { title: "Главная", to: "/" },
  Weapon: {
    title: (item: Weapon) => item.title,
    to: (id: Weapon["id"] | string) => `/weapons/${id}`,
  },
  Weapons: { title: "Оружие", to: "/weapons" },
  WeaponsTierList: { title: "Тир-лист", to: "/weapons/tier-list" },
} as const;
