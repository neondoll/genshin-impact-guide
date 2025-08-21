import { createEntityAdapter } from "@reduxjs/toolkit";

import type { IWeaponType } from "@/database/weapon-types/types";

const weaponTypesAdapter = createEntityAdapter({
  selectId: (model: IWeaponType) => model.key,
});

export default weaponTypesAdapter;
