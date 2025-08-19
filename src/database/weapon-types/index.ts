import type { TWeaponTypeKey } from "./types";

export async function getWeaponType(key: TWeaponTypeKey) {
  return (await import("./data")).default[key];
}

export async function getWeaponTypes() {
  return (await import("./data")).default;
}
