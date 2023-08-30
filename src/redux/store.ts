import { combineReducers, configureStore } from "@reduxjs/toolkit";

import deviceSlice from "./slices/deviceSlice";
import restaurantSlice from "./slices/restaurantSlice";
import menuSlice from "./slices/menuSlice";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";
import chabotSlice from "./slices/chatbotSlice";

const reducer = combineReducers({
	user: userSlice,
	device: deviceSlice,
	restaurants: restaurantSlice,
	menu: menuSlice,
	cart: cartSlice,
	chatbot: chabotSlice,
});

export const store = configureStore({ reducer });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
