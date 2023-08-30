import { createSlice } from "@reduxjs/toolkit";
import { Message } from "../../types";

const initialState = {
	messages: [] as Message[],
};

const chatbotSlice = createSlice({
	name: "chatbot-slice",
	initialState,
	reducers: {},
});

export default chatbotSlice.reducer;
