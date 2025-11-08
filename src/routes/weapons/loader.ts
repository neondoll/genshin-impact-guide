import type { Rarity } from "@/types/rarity";
import type { Weapon } from "@/types/weapon";
import type { WeaponType } from "@/types/weapon-type";
import { selectRaritiesByIds } from "@/features/rarities/selectors";
import { selectWeaponTypesAll } from "@/features/weapon-types/selectors";
import { selectWeaponsAll } from "@/features/weapons/selectors";

export interface WeaponsLoaderReturn {
  rarities: Rarity[];
  weapons: Weapon[];
  weaponTypes: WeaponType[];
}

export default function weaponsLoader(): WeaponsLoaderReturn {
  const weapons = selectWeaponsAll();
  const rarities = selectRaritiesByIds(weapons.map((weapon) => weapon.rarity));
  const weaponTypes = selectWeaponTypesAll();

  return { rarities, weapons, weaponTypes };
}
