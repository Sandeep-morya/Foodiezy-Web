import { createSlice } from "@reduxjs/toolkit";

import { getItem, removeItem, setItem } from "../../utils/localStorage";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { Device, ServiceArea } from "../../types";

const KEY = "foodiezy-redux-store-local-storage-key";

const initialState: Device = getItem(KEY) || {
	theme: "light",
	serviceArea: null,
};

const deviceSlice = createSlice({
	name: "device-slice",
	initialState,
	reducers: {
		toggleTheme(state) {
			state.theme = state.theme === "light" ? "dark" : "light";
		},
		setServiceArea(state, action: PayloadAction<ServiceArea | null>) {
			state.serviceArea = action.payload;
			setItem(KEY, state);
		},
		clearRecords() {
			removeItem(KEY);
			return initialState;
		},
	},
});
export const { toggleTheme, setServiceArea, clearRecords } =
	deviceSlice.actions;
export default deviceSlice.reducer;
