import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { User, UserData } from "../types";
import { setItem } from "../utils/localStorage";

const initialState: User = {
	token: null,
	about: null,
};

const userSlice = createSlice({
	name: "user-slice",
	initialState,
	reducers: {
		initiateUser(_, action: PayloadAction<User>) {
			setItem("current_user_id", action.payload.about?._id);
			return action.payload;
		},
		addUserData(state, action: PayloadAction<UserData>) {
			setItem("current_user_id", action.payload._id);
			state.about = action.payload;
		},
	},
});

export const { initiateUser, addUserData } = userSlice.actions;
export default userSlice.reducer;
