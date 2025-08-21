import { createEntityAdapter } from "@reduxjs/toolkit";

import type { IStat } from "@/database/stats/types";

const statsAdapter = createEntityAdapter({
  selectId: (model: IStat) => model.key,
  sortComparer: (a: IStat, b: IStat) => {
    const aName = a.abbr || a.name;
    const bName = b.abbr || b.name;

    return aName.localeCompare(bName);
  },
});

export default statsAdapter;
