import { createSlice } from "@reduxjs/toolkit";
import { Message } from "../../types";
import { systemContent, welcomeContent } from "../../utils/constants";

const messages: Message[] = [
	{ role: "system", content: systemContent },
	{ role: "assistant", content: welcomeContent },
];

const initialState = {
	messages,
};

const chatbotSlice = createSlice({
	name: "chatbot-slice",
	initialState,
	reducers: {},
});

export default chatbotSlice.reducer;
