import type { RootState } from "@/app/store";
import { regionsAdapter } from "./slice";

const selectors = regionsAdapter.getSelectors<RootState>(state => state.regions);

export default selectors;
