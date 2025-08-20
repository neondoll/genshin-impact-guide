import { createEntityAdapter } from "@reduxjs/toolkit";

import type { IArtifactSet } from "@/database/artifact-sets/types";

export default createEntityAdapter({
  selectId: (v: IArtifactSet) => v.key,
  sortComparer: (a, b) => {
    const aMaxRarity = Math.max(...a.rarities);
    const bMaxRarity = Math.max(...b.rarities);

    return aMaxRarity === bMaxRarity ? a.name.localeCompare(b.name) : bMaxRarity - aMaxRarity;
  },
});
