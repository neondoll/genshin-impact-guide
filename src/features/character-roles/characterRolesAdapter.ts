import { createEntityAdapter } from "@reduxjs/toolkit";

import type { ICharacterRole } from "@/database/character-roles/types";

export default createEntityAdapter({
  selectId: (v: ICharacterRole) => v.key,
});
