import { createEntityAdapter } from "@reduxjs/toolkit";

import type { ITalent } from "@/database/talents/types";

const talentsAdapter = createEntityAdapter({
  selectId: (model: ITalent) => model.key,
});

export default talentsAdapter;
