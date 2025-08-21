import { createEntityAdapter } from "@reduxjs/toolkit";

import type { ITierListWeapons } from "@/database/tier-lists-weapons/types";

const tierListsWeaponsAdapter = createEntityAdapter({
  selectId: (model: ITierListWeapons) => model.key,
});

export default tierListsWeaponsAdapter;
