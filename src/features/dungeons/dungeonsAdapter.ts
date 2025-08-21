import { createEntityAdapter } from "@reduxjs/toolkit";

import type { IDungeon } from "@/database/dungeons/types";

const dungeonsAdapter = createEntityAdapter({
  selectId: (model: IDungeon) => model.key,
});

export default dungeonsAdapter;
