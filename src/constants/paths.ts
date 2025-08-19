import type { ElementKey } from "@/database/types/element";
import type { IArtifactSet } from "@/database/artifact-sets/types";
import type { ICharacter } from "@/database/characters/types";
import type { Weapon, WeaponKey } from "@/database/types/weapon";

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
  Element: { to: (key: ElementKey | string) => `/elements/${key}` },
  Resources: { title: "Материалы", to: "/resources" },
  Root: { title: "Главная", to: "/" },
  Weapon: {
    title: (item: Weapon) => item.name,
    to: (key: WeaponKey | string) => `/weapons/${key}`,
  },
  Weapons: { title: "Оружие", to: "/weapons" },
  WeaponsTierList: { title: "Тир-лист", to: "/weapons/tier-list" },
} as const;
