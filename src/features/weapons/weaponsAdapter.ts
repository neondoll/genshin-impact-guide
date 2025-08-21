import { createEntityAdapter } from "@reduxjs/toolkit";

import type { IWeapon } from "@/database/weapons/types";

const weaponsAdapter = createEntityAdapter({
  selectId: (model: IWeapon) => model.key,
  sortComparer: (a: IWeapon, b: IWeapon) => {
    return a.rarity === b.rarity ? a.name.localeCompare(b.name) : b.rarity - a.rarity;
  },
});

export default weaponsAdapter;
