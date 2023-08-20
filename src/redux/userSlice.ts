import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { User, UserData } from "../types";

const initialState: User = {
	token: null,
	about: null,
};

const userSlice = createSlice({
	name: "user-slice",
	initialState,
	reducers: {
		initiateUser(_, action: PayloadAction<User>) {
			return action.payload;
		},
		addUserData(state, action: PayloadAction<UserData>) {
			state.about = action.payload;
		},
	},
});

export const { initiateUser, addUserData } = userSlice.actions;
export default userSlice.reducer;
