import type { RootState } from "@/app/store";
import statsAdapter from "./statsAdapter";

const statsSelectors = statsAdapter.getSelectors<RootState>(state => state.stats);

export default statsSelectors;
