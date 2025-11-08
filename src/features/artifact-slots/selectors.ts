import { createSelector } from "@reduxjs/toolkit";

import type { ArtifactSlotId } from "./types";
import type { RootState } from "@/app/store";
import { compareArtifactSlots } from "./lib";

const selectArtifactSlotsState = (state: RootState) => state.artifactSlots;

export const selectArtifactSlotsEntities = createSelector(selectArtifactSlotsState, (state) => state.entities);
export const selectArtifactSlotsIds = createSelector(selectArtifactSlotsState, (state) => state.ids);

export const selectAllArtifactSlots = createSelector(selectArtifactSlotsEntities, selectArtifactSlotsIds, (entities, ids) => ids.map((id) => entities[id]).sort(compareArtifactSlots));
export const selectArtifactSlotById = createSelector([selectArtifactSlotsEntities, (_, id: ArtifactSlotId) => id], (entities, id) => entities[id]);
export const selectArtifactSlotImage = createSelector([selectArtifactSlotsEntities, (_, id: ArtifactSlotId) => id], (entities, id) => entities[id]?.imageSrc);
export const selectArtifactSlotLabel = createSelector([selectArtifactSlotsEntities, (_, id: ArtifactSlotId) => id], (entities, id) => entities[id]?.label);
export const selectArtifactSlotsMap = createSelector(selectArtifactSlotsEntities, (entities) => entities);

export const selectMainStatsSlots = createSelector(selectAllArtifactSlots, (slots) => slots.filter((slot) => slot.id !== "flower" && slot.id !== "plume"));
