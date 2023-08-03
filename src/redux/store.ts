import { configureStore } from "@reduxjs/toolkit";
import foodSlice from "./foodSlice";
import deviceSlice from "./deviceSlice";

export const store = configureStore({
	reducer: {
		food: foodSlice,
		device: deviceSlice,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
