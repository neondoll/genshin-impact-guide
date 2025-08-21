import { createEntityAdapter } from "@reduxjs/toolkit";

import type { IArtifactSet } from "@/database/artifact-sets/types";

const artifactSetsAdapter = createEntityAdapter({
  selectId: (model: IArtifactSet) => model.key,
  sortComparer: (a: IArtifactSet, b: IArtifactSet) => {
    const aMaxRarity = Math.max(...a.rarities);
    const bMaxRarity = Math.max(...b.rarities);

    return aMaxRarity === bMaxRarity ? a.name.localeCompare(b.name) : bMaxRarity - aMaxRarity;
  },
});

export default artifactSetsAdapter;
