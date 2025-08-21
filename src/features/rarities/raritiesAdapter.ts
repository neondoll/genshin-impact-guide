import { createEntityAdapter } from "@reduxjs/toolkit";

import type { TRarity } from "@/database/rarities/types";

const raritiesAdapter = createEntityAdapter({
  selectId: (model: TRarity) => model,
  sortComparer: (a: TRarity, b: TRarity) => b - a,
});

export default raritiesAdapter;
