import type { Stat } from "@/types/stat";
import type { Weapon } from "@/types/weapon";
import type { WeaponType } from "@/types/weapon-type";
import { selectWeaponById } from "@/features/weapons/selectors";
import { selectWeaponTypeById } from "@/features/weapon-types/selectors";
import { selectStatById } from "@/features/stats/selectors.ts";

export interface WeaponLoaderArgs {
  params: Record<string, string | undefined>;
}

export interface WeaponLoaderReturn {
  weapon?: Weapon;
  weaponSecondaryStats?: Stat;
  weaponType?: WeaponType;
}

export default function weaponLoader({ params }: WeaponLoaderArgs): WeaponLoaderReturn {
  const weaponId = params.weaponId as Weapon["id"];

  const weapon = selectWeaponById(weaponId);

  let weaponSecondaryStats = undefined;
  let weaponType = undefined;

  if (weapon) {
    weaponSecondaryStats = selectStatById(weapon.secondary_stats_id);
    weaponType = selectWeaponTypeById(weapon.type_id);

    if (weapon.rarity) {
      window.document.documentElement.classList.add(`rarity-${weapon.rarity}`);
    }
  }

  return { weapon, weaponSecondaryStats, weaponType };
}
