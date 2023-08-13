import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { FiltersType, Restaurant, SortType } from "../types";
import {
	sortByCostH2L,
	sortByCostL2H,
	sortByDelivery,
	sortByRating,
	sortByTitle,
} from "../utils/sorting";
import { getItem, setItem } from "../utils/localStorage";

type InitialState = {
	total: number;
	restaurants: Restaurant[];
	collections?: [];
};

const initialState: InitialState = {
	total: 0,
	restaurants: [],
	collections: [],
};

const restaurantSlice = createSlice({
	name: "restaurant-slice",
	initialState,
	reducers: {
		initRestorants(_, action: PayloadAction<InitialState>) {
			setItem("restorants", action.payload.restaurants);
			return action.payload;
		},
		addRestaurants(state, action: PayloadAction<Restaurant[]>) {
			setItem("restorants", [...getItem("restorants"), ...action.payload]);
			state.restaurants = [...state.restaurants, ...action.payload];
		},
		sortAccording(state, action: PayloadAction<SortType>) {
			switch (action.payload) {
				case "rating":
					state.restaurants.sort(sortByRating);
					break;
				case "title":
					state.restaurants.sort(sortByTitle);
					break;
				case "delivery":
					state.restaurants.sort(sortByDelivery);
					break;
				case "h2l":
					state.restaurants.sort(sortByCostH2L);
					break;
				case "l2h":
					state.restaurants.sort(sortByCostL2H);
					break;
				default:
					state.restaurants = getItem("restorants");
					return;
			}
		},
		applyFilter(state, action: PayloadAction<FiltersType>) {
			const value = [...state.restaurants];
			console.log(value);
			console.log(action.payload);
		},
	},
});
export const { initRestorants, addRestaurants, sortAccording, applyFilter } =
	restaurantSlice.actions;
export default restaurantSlice.reducer;
