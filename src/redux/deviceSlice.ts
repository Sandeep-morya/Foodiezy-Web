import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../utils/localStorage";

import type { Device, GeoLocation } from "../types";

const KEY = "foodiezy-local-storage-key";
const initialState: Device = {
	theme: "light",
	geo_location: null,
};

const deviceSlice = createSlice({
	name: "device-slice",
	initialState,
	reducers: {
		loadFromLocalStorage() {
			return getItem(KEY) || initialState;
		},
		toggleTheme(state) {
			state.theme = state.theme === "light" ? "dark" : "light";
		},
		setGeoLocation(state, action: PayloadAction<GeoLocation>) {
			state.geo_location = action.payload;
			setItem(KEY, state);
		},
	},
});
export const { loadFromLocalStorage, toggleTheme, setGeoLocation } =
	deviceSlice.actions;
export default deviceSlice.reducer;
