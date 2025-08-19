import type { TCharacterRoleKey } from "./types";

export async function getCharacterRole(key: TCharacterRoleKey) {
  return (await import("./data")).default[key];
}
