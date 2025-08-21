import { createEntityAdapter } from "@reduxjs/toolkit";

import type { IRegion } from "@/database/regions/types";

const regionsAdapter = createEntityAdapter({
  selectId: (model: IRegion) => model.key,
});

export default regionsAdapter;
