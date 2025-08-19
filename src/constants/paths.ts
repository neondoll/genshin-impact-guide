import type { IArtifactSet } from "@/database/artifact-sets/types";
import type { ICharacter } from "@/database/characters/types";
import type { IElement } from "@/database/elements/types";
import type { IWeapon } from "@/database/weapons/types";

export default {
  ArtifactSet: {
    title: (item: IArtifactSet) => item.name,
    to: (key: IArtifactSet["key"] | string) => `/artifact-sets/${key}`,
  },
  ArtifactSets: { title: "Артефакты", to: "/artifact-sets" },
  Character: {
    title: (item: ICharacter) => item.name,
    to: (key: ICharacter["key"] | string) => `/characters/${key}`,
  },
  Characters: { title: "Персонажи", to: "/characters" },
  Element: {
    title: (item: IElement) => item.name,
    to: (key: IElement["key"] | string) => `/elements/${key}`,
  },
  Resources: { title: "Материалы", to: "/resources" },
  Root: { title: "Главная", to: "/" },
  Weapon: {
    title: (item: IWeapon) => item.name,
    to: (key: IWeapon["key"] | string) => `/weapons/${key}`,
  },
  Weapons: { title: "Оружие", to: "/weapons" },
  WeaponsTierList: { title: "Тир-лист", to: "/weapons/tier-list" },
} as const;
