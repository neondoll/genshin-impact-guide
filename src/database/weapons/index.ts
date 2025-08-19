import type { IWeapon } from "./types";

export async function getWeapon(key: IWeapon["key"]) {
  return (await import("./data")).default[key];
}

export async function getWeapons(keys?: IWeapon["key"][]) {
  let weapons = Object.values((await import("./data")).default);

  if (keys) {
    weapons = weapons.filter(weapon => keys.includes(weapon.key));
  }

  return weapons.sort(sortWeapons);
}

export function sortWeapons(a: IWeapon, b: IWeapon) {
  return a.rarity === b.rarity ? a.name.localeCompare(b.name) : b.rarity - a.rarity;
}
