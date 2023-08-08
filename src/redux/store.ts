import { combineReducers, configureStore } from "@reduxjs/toolkit";
import deviceSlice from "./deviceSlice";
import restorantSlice from "./restorantSlice";

const reducer = combineReducers({
	device: deviceSlice,
	restorant: restorantSlice,
});

export const store = configureStore({ reducer });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
