import type { ArtifactSet } from "@/features/artifact-sets/types";
import type { ICharacter } from "../database/characters/types";
import type { IWeapon } from "../database/weapons/types";

export default {
  ArtifactSet: {
    title: (item: ArtifactSet) => item.name,
    to: (id: ArtifactSet["id"] | string) => `/artifact-sets/${id}`,
  },
  ArtifactSets: { title: "Артефакты", to: "/artifact-sets" },
  Character: {
    title: (item: ICharacter) => item.name,
    to: (key: ICharacter["key"] | string) => `/characters/${key}`,
  },
  Characters: { title: "Персонажи", to: "/characters" },
  Resources: { title: "Материалы", to: "/resources" },
  Root: { title: "Главная", to: "/" },
  Weapon: {
    title: (item: IWeapon) => item.name,
    to: (key: IWeapon["key"] | string) => `/weapons/${key}`,
  },
  Weapons: { title: "Оружие", to: "/weapons" },
  WeaponsTierList: { title: "Тир-лист", to: "/weapons/tier-list" },
} as const;
