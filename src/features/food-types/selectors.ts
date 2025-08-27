import type { RootState } from "@/app/store";
import { foodTypesAdapter } from "./slice";

const selectors = foodTypesAdapter.getSelectors<RootState>(state => state.foodTypes);

export default selectors;
