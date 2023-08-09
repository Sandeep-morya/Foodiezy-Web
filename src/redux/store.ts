import { combineReducers, configureStore } from "@reduxjs/toolkit";
import deviceSlice from "./deviceSlice";
import restaurantSlice from "./restaurantSlice";

const reducer = combineReducers({
	device: deviceSlice,
	restaurants: restaurantSlice,
});

export const store = configureStore({ reducer });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
