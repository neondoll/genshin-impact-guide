import type { IWeaponType } from "./types";
import { CWeaponType } from "./classes";
import { WeaponTypeKeys } from "./enums";

export default {
  [WeaponTypeKeys["🏹"]]: new CWeaponType("🏹", "Стрелковое оружие", "Стрелковое"),
  [WeaponTypeKeys["💥"]]: new CWeaponType("💥", "Катализатор", "Катализатор"),
  [WeaponTypeKeys["🗡️"]]: new CWeaponType("🗡️", "Двуручное оружие", "Двуручное"),
  [WeaponTypeKeys["🔱"]]: new CWeaponType("🔱", "Древковое оружие", "Древковое"),
  [WeaponTypeKeys["⚔️"]]: new CWeaponType("⚔️", "Одноручное оружие", "Одноручное"),
} as Record<IWeaponType["key"], IWeaponType>;
