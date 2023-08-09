import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { Restaurant } from "../types";

type InitialState = { total: number; restaurants: Restaurant[] };
const initialState: InitialState = {
	total: 0,
	restaurants: [],
};

const restaurantSlice = createSlice({
	name: "restaurant-slice",
	initialState,
	reducers: {
		initRestorants(_, action: PayloadAction<InitialState>) {
			return action.payload;
		},
		addRestaurants(state, action: PayloadAction<Restaurant[]>) {
			state.restaurants = [...state.restaurants, ...action.payload];
		},
	},
});
export const { initRestorants, addRestaurants } = restaurantSlice.actions;
export default restaurantSlice.reducer;
