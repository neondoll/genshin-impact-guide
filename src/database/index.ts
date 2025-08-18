import type { ArtifactSet } from "./types/artifact-set";
import type { ArtifactSlot } from "./types/artifact-slot";
import type { Character } from "./types/character";
import type { CharacterRoleKey } from "./types/character-role";
import type { ElementKey } from "./types/element";
import type { RegionKey } from "./types/region";
import type { Stat } from "./types/stat";
import type { TalentKey } from "./types/talent";
import type { Weapon } from "./types/weapon";
import type { WeaponTypeKey } from "./types/weapon-type";

export async function getArtifactSet(key: ArtifactSet["key"]) {
  return (await import("./artifact-sets")).default[key];
}

export async function getArtifactSetRecommendations(key: ArtifactSet["key"]) {
  const data = (await import("./artifact-sets-recommendations")).default;

  return key in data ? data[key] : undefined;
}

export async function getArtifactSets() {
  return Object.values((await import("./artifact-sets")).default).sort(sortArtifactSets);
}

export async function getArtifactSlot(key: ArtifactSlot["key"]) {
  return (await import("./artifact-slots")).default[key];
}

export async function getCharacter(key: Character["key"]) {
  return (await import("./characters")).default[key];
}

export async function getCharacterRecommendations(key: Character["key"]) {
  const data = (await import("./character-recommendations")).default;

  return key in data ? data[key] : undefined;
}

export async function getCharacterRole(key: CharacterRoleKey) {
  return (await import("./character-roles")).default[key];
}

export async function getCharacters() {
  return Object.values((await import("./characters")).default).sort(sortCharacters);
}

export async function getElement(key: ElementKey) {
  return (await import("./elements")).default[key];
}

export async function getElements() {
  return (await import("./elements")).default;
}

export async function getRegion(key: RegionKey) {
  return (await import("./regions")).default[key];
}

export async function getStat(key: Stat["key"]) {
  return (await import("./stats")).default[key];
}

export async function getStats(keys?: Stat["key"][]) {
  let stats = Object.values((await import("./stats")).default);

  if (keys) {
    stats = stats.filter(stat => keys.includes(stat.key));
  }

  return stats.sort(sortStats);
}

export async function getTalent(key: TalentKey) {
  return (await import("./talents")).default[key];
}

export async function getTierListsWeapons() {
  return (await import("./tier-lists-weapons")).default;
}

export async function getWeapon(key: Weapon["key"]) {
  return (await import("./weapons")).default[key];
}

export async function getWeapons(keys?: Weapon["key"][]) {
  let weapons = Object.values((await import("./weapons")).default);

  if (keys) {
    weapons = weapons.filter(weapon => keys.includes(weapon.key));
  }

  return weapons.sort(sortWeapons);
}

export async function getWeaponType(key: WeaponTypeKey) {
  return (await import("./weapon-types")).default[key];
}

export async function getWeaponTypes() {
  return (await import("./weapon-types")).default;
}

export function sortArtifactSets(a: ArtifactSet, b: ArtifactSet) {
  const aMaxRarity = Math.max(...a.rarities);
  const bMaxRarity = Math.max(...b.rarities);

  return aMaxRarity === bMaxRarity ? a.name.localeCompare(b.name) : bMaxRarity - aMaxRarity;
}

export function sortArtifactSlots(a: ArtifactSlot, b: ArtifactSlot) {
  return a.sort_by - b.sort_by;
}

export function sortCharacters(a: Character, b: Character) {
  return a.rarity === b.rarity ? a.name.localeCompare(b.name) : b.rarity - a.rarity;
}

export function sortStats(a: Stat, b: Stat) {
  const aName = a.abbr || a.name;
  const bName = b.abbr || b.name;

  return aName.localeCompare(bName);
}

export function sortWeapons(a: Weapon, b: Weapon) {
  return a.rarity === b.rarity ? a.name.localeCompare(b.name) : b.rarity - a.rarity;
}
