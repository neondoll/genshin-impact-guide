import { createEntityAdapter } from "@reduxjs/toolkit";

import type { IArtifactSetRecommendations } from "@/database/artifact-sets-recommendations/types";

export default createEntityAdapter({
  selectId: (v: IArtifactSetRecommendations) => v.artifact_set_key,
});
