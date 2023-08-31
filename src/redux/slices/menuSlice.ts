import { createSlice } from "@reduxjs/toolkit";
import { MenuCard } from "../../types";

const initialState = null as MenuCard[] | null;

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
