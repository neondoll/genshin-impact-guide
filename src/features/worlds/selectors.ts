import type { RootState } from "@/app/store";
import { worldsAdapter } from "./slice";

const selectors = worldsAdapter.getSelectors<RootState>((state) => state.worlds);

export default selectors;
