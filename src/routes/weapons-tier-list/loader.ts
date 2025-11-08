import type { TierListWeapons } from "@/types/tier-list-weapons";
import { selectTierListsWeaponsAll } from "@/features/tier-lists-weapons/selectors";

export interface WeaponsTierListLoaderReturn {
  tierListsWeapons: TierListWeapons[];
}

export default function weaponsTierListLoader(): WeaponsTierListLoaderReturn {
  const tierListsWeapons = selectTierListsWeaponsAll();

  return { tierListsWeapons };
}
