import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../types";

const initialState: CartItem[] = [];

const cartSlice = createSlice({
	name: "cart-slice",
	initialState,
	reducers: {
		initiateCart(_, action: PayloadAction<CartItem[]>) {
			return action.payload;
		},
		addToCart(state, { payload }: PayloadAction<CartItem>) {
			const dishId = payload.dishId;
			const cartItem: CartItem = {
				dishId,
				category: payload.category,
				dishName: payload.dishName,
				imageId: payload.imageId,
				count: payload.count,
				price: payload.price,
				restaurantId: payload.restaurantId,
				restaurantName: payload.restaurantName,
			};

			const cartItemIndex = state.findIndex((item) => item.dishId === dishId);
			if (cartItemIndex != -1) {
				state[cartItemIndex] = cartItem;
			} else {
				state.push(cartItem);
			}
		},

		removeFromCart(state, action: PayloadAction<string>) {
			const dishId = action.payload;
			const cartItemIndex = state.findIndex((item) => item.dishId === dishId);
			if (cartItemIndex !== -1) {
				return state.filter((cartItem) => cartItem.dishId !== dishId);
			} else {
				return [...state];
			}
		},
	},
});
export const { initiateCart, addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
