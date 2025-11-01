import type { RootState } from "@/app/store";
import { dungeonsAdapter } from "./slice";

const selectors = dungeonsAdapter.getSelectors<RootState>((state) => state.dungeons);

export default selectors;
