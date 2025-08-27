import type { RootState } from "@/app/store";
import { resourcesAdapter } from "./slice";

const selectors = resourcesAdapter.getSelectors<RootState>(state => state.resources);

export default selectors;
