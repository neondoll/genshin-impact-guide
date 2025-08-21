import { createEntityAdapter } from "@reduxjs/toolkit";

import type { ICharacter } from "@/database/characters/types";

const charactersAdapter = createEntityAdapter({
  selectId: (model: ICharacter) => model.key,
  sortComparer: (a: ICharacter, b: ICharacter) => {
    return a.rarity === b.rarity ? a.name.localeCompare(b.name) : b.rarity - a.rarity;
  },
});

export default charactersAdapter;
