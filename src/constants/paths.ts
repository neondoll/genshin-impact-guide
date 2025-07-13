import type { ArtifactSet, ArtifactSetUid } from "@/database/types/artifact-set";
import type { Character, CharacterUid } from "@/database/types/character";
import type { ElementUid } from "@/database/types/element";

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
  Weapons: { title: "Оружие", to: "/weapons" },
  WeaponsTierList: { title: "Тир-лист", to: "/weapons/tier-list" },
} as const;
