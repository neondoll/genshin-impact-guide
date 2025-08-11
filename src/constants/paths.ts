import type { ArtifactSet, ArtifactSetKey } from "@/database/types/artifact-set";
import type { Character, CharacterKey } from "@/database/types/character";
import type { ElementKey } from "@/database/types/element";
import type { Weapon, WeaponKey } from "@/database/types/weapon";

export default {
  ArtifactSet: {
    title: (item: ArtifactSet) => item.name,
    to: (key: ArtifactSetKey | string) => `/artifact-sets/${key}`,
  },
  ArtifactSets: { title: "Артефакты", to: "/artifact-sets" },
  Character: {
    title: (item: Character) => item.name,
    to: (key: CharacterKey | string) => `/characters/${key}`,
  },
  Characters: { title: "Персонажи", to: "/characters" },
  Element: { to: (key: ElementKey | string) => `/elements/${key}` },
  Root: { title: "Главная", to: "/" },
  Weapon: {
    title: (item: Weapon) => item.name,
    to: (key: WeaponKey | string) => `/weapons/${key}`,
  },
  Weapons: { title: "Оружие", to: "/weapons" },
  WeaponsTierList: { title: "Тир-лист", to: "/weapons/tier-list" },
} as const;
