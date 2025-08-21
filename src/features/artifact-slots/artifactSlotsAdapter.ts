import { createEntityAdapter } from "@reduxjs/toolkit";

import type { IArtifactSlot } from "@/database/artifact-slots/types";

const artifactSlotsAdapter = createEntityAdapter({
  selectId: (model: IArtifactSlot) => model.key,
  sortComparer: (a: IArtifactSlot, b: IArtifactSlot) => a.sort_by - b.sort_by,
});

export default artifactSlotsAdapter;
