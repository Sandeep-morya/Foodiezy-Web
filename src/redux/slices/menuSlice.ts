import { createSlice } from "@reduxjs/toolkit";
// import { MenuCard } from "../../types";
import { dummyData } from "../../utils/constants";

// const initialState = null as MenuCard[] | null;
const initialState = dummyData;

const menuSlice = createSlice({
	name: "menu-slice",
	initialState,
	reducers: {
		addInitialMenu(_, action) {
			return action.payload;
		},
	},
});
export const { addInitialMenu } = menuSlice.actions;
export default menuSlice.reducer;
