import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = 0;

const foodSlice = createSlice({
	name: "food-slice",
	initialState,
	reducers: {},
});

export default foodSlice.reducer;
