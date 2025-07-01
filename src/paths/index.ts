import type { ArtifactSetUid } from "@/database/types/artifact-sets";
import type { CharacterUid } from "@/database/types/characters";
import type { ElementUid } from "@/database/types/elements";

export default {
  ArtifactSet: (uid: ArtifactSetUid | string) => `/artifact-sets/${uid}`,
  Character: (uid: CharacterUid | string) => `/characters/${uid}`,
  Element: (uid: ElementUid | string) => `/elements/${uid}`,
  Root: "/",
} as const;
