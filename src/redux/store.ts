import { combineReducers, configureStore } from "@reduxjs/toolkit";

import deviceSlice from "./deviceSlice";
import restaurantSlice from "./restaurantSlice";
import menuSlice from "./menuSlice";

const reducer = combineReducers({
	device: deviceSlice,
	restaurants: restaurantSlice,
	menu: menuSlice,
});

export const store = configureStore({ reducer });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
