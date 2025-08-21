import { createEntityAdapter } from "@reduxjs/toolkit";

import type { IArtifactSetRecommendations } from "@/database/artifact-sets-recommendations/types";

const artifactSetsRecommendationsAdapter = createEntityAdapter({
  selectId: (model: IArtifactSetRecommendations) => model.artifact_set_key,
});

export default artifactSetsRecommendationsAdapter;
