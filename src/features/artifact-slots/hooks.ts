import { useMemo } from "react";
import { useSelector } from "react-redux";

import type { ArtifactSlotId } from "./types";
import {
  selectAllArtifactSlots,
  selectArtifactSlotById,
  selectArtifactSlotImage,
  selectArtifactSlotLabel,
  selectMainStatsSlots,
} from "./selectors";

export const useArtifactSlot = (id: ArtifactSlotId) => {
  return useSelector((state) => selectArtifactSlotById(state, id));
};
export const useArtifactSlotImage = (id: ArtifactSlotId) => {
  return useSelector((state) => selectArtifactSlotImage(state, id));
};
export const useArtifactSlotLabel = (id: ArtifactSlotId) => {
  return useSelector((state) => selectArtifactSlotLabel(state, id));
};
export const useArtifactSlots = () => {
  return useSelector(selectAllArtifactSlots);
};
export const useArtifactSlotsOptions = () => {
  const slots = useArtifactSlots();

  return useMemo(() => {
    return slots.map((slot) => {
      return { icon: slot.imageSrc, label: slot.label, sortOrder: slot.sortOrder, value: slot.id };
    });
  }, [slots]);
};
export const useMainStatsSlots = () => {
  return useSelector(selectMainStatsSlots);
};
