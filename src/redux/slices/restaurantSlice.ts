import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import { getItem, setItem } from "../utils/localStorage";
// import {
// 	sortByCostH2L,
// 	sortByCostL2H,
// 	sortByDelivery,
// 	sortByRating,
// 	sortByTitle,
// } from "../utils/sorting";

import type { Restaurant } from "../../types";
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
			return action.payload;
		},
		addRestaurants(state, action: PayloadAction<Restaurant[]>) {
			// const data = action.payload;
			// const moreRestaurants = data.filter(
			// 	(e) => !state.restaurants.some((x) => x._id === e._id),
			// );
			state.restaurants = state.restaurants.concat(action.payload);
		},
		// :: No more using frontend sorting; using sorting from backend ::
		// sortAccording(state, action: PayloadAction<SortType>) {
		// 	switch (action.payload) {
		// 		case "rating":
		// 			state.restaurants.sort(sortByRating);
		// 			break;
		// 		case "title":
		// 			state.restaurants.sort(sortByTitle);
		// 			break;
		// 		case "delivery":
		// 			state.restaurants.sort(sortByDelivery);
		// 			break;
		// 		case "h2l":
		// 			state.restaurants.sort(sortByCostH2L);
		// 			break;
		// 		case "l2h":
		// 			state.restaurants.sort(sortByCostL2H);
		// 			break;
		// 		default:
		// 			state.restaurants = getItem("restorants");
		// 			return;
		// 	}
		// },
	},
});
export const { initRestorants, addRestaurants } = restaurantSlice.actions;
export default restaurantSlice.reducer;
