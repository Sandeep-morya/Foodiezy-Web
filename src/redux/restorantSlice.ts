import { createSlice } from "@reduxjs/toolkit";
import type { Restorant } from "../types";

interface InitialState {
	isLoading: boolean;
	isError: boolean;
	data: Restorant[] | null;
}
const initialState: InitialState = {
	isLoading: false,
	isError: false,
	data: null,
};

const restorantSlice = createSlice({
	name: "restorant-slice",
	initialState,
	reducers: {},
	extraReducers: {},
});

export default restorantSlice.reducer;
