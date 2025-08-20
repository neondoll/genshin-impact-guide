import { createEntityAdapter } from "@reduxjs/toolkit";

import type { IStat } from "@/database/stats/types";

export default createEntityAdapter({
  selectId: (v: IStat) => v.key,
  sortComparer: (a, b) => {
    const aName = a.abbr || a.name;
    const bName = b.abbr || b.name;

    return aName.localeCompare(bName);
  },
});
