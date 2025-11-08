import type { Weapon } from "@/types/weapon";
import type { WeaponType } from "@/types/weapon-type";
import { type Rarity, useRaritiesByIds } from "@/features/rarities";
import { selectWeaponTypesAll } from "@/features/weapon-types/selectors";
import { selectWeaponsAll } from "@/features/weapons/selectors";

export interface WeaponsLoaderReturn {
  rarities: Rarity[];
  weapons: Weapon[];
  weaponTypes: WeaponType[];
}

export default function weaponsLoader(): WeaponsLoaderReturn {
  const weapons = selectWeaponsAll();
  const rarities = useRaritiesByIds(weapons.map((weapon) => weapon.rarity));
  const weaponTypes = selectWeaponTypesAll();

  return { rarities, weapons, weaponTypes };
}
