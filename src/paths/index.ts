import type { ArtifactSetUid } from "@/database/types/artifact-sets";
import type { CharacterUid } from "@/database/types/characters";

export default {
  ArtifactSet: (uid: ArtifactSetUid | string) => `/artifact-sets/${uid}`,
  Character: (uid: CharacterUid | string) => `/characters/${uid}`,
  Root: "/",
} as const;
