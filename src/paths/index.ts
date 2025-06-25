import type { CharacterUid } from "@/database/characters";

export default {
  Character: (uid: CharacterUid | string) => `/characters/${uid}`,
  Root: "/",
} as const;
