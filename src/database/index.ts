import type { ElementKey } from "./types/element";
import type { ICharacter } from "./characters/types";
import type { RegionKey } from "./types/region";
import type { Stat } from "./types/stat";
import type { TalentKey } from "./types/talent";
import type { Weapon } from "./types/weapon";
import type { WeaponTypeKey } from "./types/weapon-type";

export async function getCharacterRecommendations(key: ICharacter["key"]) {
  const data = (await import("./character-recommendations")).default;

  return key in data ? data[key] : undefined;
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

export function sortStats(a: Stat, b: Stat) {
  const aName = a.abbr || a.name;
  const bName = b.abbr || b.name;

  return aName.localeCompare(bName);
}

export function sortWeapons(a: Weapon, b: Weapon) {
  return a.rarity === b.rarity ? a.name.localeCompare(b.name) : b.rarity - a.rarity;
}
