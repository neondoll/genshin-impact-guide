import type { ICharacter } from "./types";

export async function getCharacter(key: ICharacter["key"]) {
  return (await import("./data")).default[key];
}

export async function getCharacters() {
  return Object.values((await import("./data")).default).sort(sortCharacters);
}

export function sortCharacters(a: ICharacter, b: ICharacter) {
  return a.rarity === b.rarity ? a.name.localeCompare(b.name) : b.rarity - a.rarity;
}
