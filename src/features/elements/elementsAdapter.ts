import { createEntityAdapter } from "@reduxjs/toolkit";

import type { IElement } from "@/database/elements/types";

const elementsAdapter = createEntityAdapter({
  selectId: (model: IElement) => model.key,
});

export default elementsAdapter;
