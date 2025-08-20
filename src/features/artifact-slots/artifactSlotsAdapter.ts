import { createEntityAdapter } from "@reduxjs/toolkit";

import type { IArtifactSlot } from "@/database/artifact-slots/types";

export default createEntityAdapter({
  selectId: (v: IArtifactSlot) => v.key,
  sortComparer: (a, b) => a.sort_by - b.sort_by,
});
