import { createEntityAdapter } from "@reduxjs/toolkit";

import type { ICharacterRecommendations } from "@/database/characters-recommendations/types";

const charactersRecommendationsAdapter = createEntityAdapter({
  selectId: (model: ICharacterRecommendations) => model.character_key,
});

export default charactersRecommendationsAdapter;
