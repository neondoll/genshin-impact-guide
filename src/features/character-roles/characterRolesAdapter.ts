import { createEntityAdapter } from "@reduxjs/toolkit";

import type { ICharacterRole } from "@/database/character-roles/types";

const characterRolesAdapter = createEntityAdapter({
  selectId: (model: ICharacterRole) => model.key,
  sortComparer: (a: ICharacterRole, b: ICharacterRole) => a.sort_by - b.sort_by,
});

export default characterRolesAdapter;
