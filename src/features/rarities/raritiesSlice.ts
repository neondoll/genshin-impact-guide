import { createSlice } from "@reduxjs/toolkit";

import raritiesAdapter from "./raritiesAdapter";

const raritiesSlice = createSlice({
  name: "rarities",
  initialState: raritiesAdapter.getInitialState({ loading: "idle" }, [1, 2, 3, 4, 5]),
  reducers: {},
});

export default raritiesSlice;
