import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { User, UserData } from "../../types";
import { removeItem, setItem } from "../../utils/localStorage";

const initialState: User = {
	token: null,
	about: null,
};
const KEY = "foodiezy-user";
const userSlice = createSlice({
	name: "user-slice",
	initialState,
	reducers: {
		initiateUser(_, action: PayloadAction<User>) {
			setItem(KEY, {
				id: action.payload.about?._id,
				name: action.payload.about?.name,
			});
			return action.payload;
		},
		addUserData(state, action: PayloadAction<UserData>) {
			setItem(KEY, { id: action.payload._id, name: action.payload.name });
			state.about = action.payload;
		},
		logoutUser() {
			removeItem(KEY);
			return initialState;
		},
	},
});

export const { initiateUser, addUserData, logoutUser } = userSlice.actions;
export default userSlice.reducer;
