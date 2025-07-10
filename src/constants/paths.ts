import type { ArtifactSetUid } from "@/database/types/artifact-set.ts";
import type { CharacterUid } from "@/database/types/character.ts";
import type { ElementUid } from "@/database/types/element.ts";

export default {
  ArtifactSet: (uid: ArtifactSetUid | string) => `/artifact-sets/${uid}`,
  ArtifactSets: "/artifact-sets",
  Character: (uid: CharacterUid | string) => `/characters/${uid}`,
  Characters: "/characters",
  Element: (uid: ElementUid | string) => `/elements/${uid}`,
  Root: "/",
  Weapons: "/weapons",
} as const;
