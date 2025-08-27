import type { RootState } from "@/app/store";
import { resourceTypesAdapter } from "./slice";

const selectors = resourceTypesAdapter.getSelectors<RootState>(state => state.resourceTypes);

export default selectors;
