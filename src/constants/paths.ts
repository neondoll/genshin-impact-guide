import type { ArtifactSet, ArtifactSetUid } from "@/database/types/artifact-set";
import type { Character, CharacterUid } from "@/database/types/character";
import type { ElementUid } from "@/database/types/element";
import type { Weapon, WeaponUid } from "@/database/types/weapon";

export default {
  ArtifactSet: {
    title: (item: ArtifactSet) => item.name,
    to: (uid: ArtifactSetUid | string) => `/artifact-sets/${uid}`,
  },
  ArtifactSets: { title: "Артефакты", to: "/artifact-sets" },
  Character: {
    title: (item: Character) => item.name,
    to: (uid: CharacterUid | string) => `/characters/${uid}`,
  },
  Characters: { title: "Персонажи", to: "/characters" },
  Element: { to: (uid: ElementUid | string) => `/elements/${uid}` },
  Root: { title: "Главная", to: "/" },
  Weapon: {
    title: (item: Weapon) => item.name,
    to: (uid: WeaponUid | string) => `/weapons/${uid}`,
  },
  Weapons: { title: "Оружие", to: "/weapons" },
  WeaponsTierList: { title: "Тир-лист", to: "/weapons/tier-list" },
} as const;
