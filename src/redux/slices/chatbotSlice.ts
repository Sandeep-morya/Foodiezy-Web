import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Message } from "../../types";
import { systemContent, welcomeContent } from "../../utils/constants";

const initialMessages: Message[] = [
	{ role: "system", content: systemContent },
	{ role: "assistant", content: welcomeContent, links: [] },
];

const initialState = {
	loading: false,
	error: false,
	messages: initialMessages,
};

const chatbotSlice = createSlice({
	name: "chatbot-slice",
	initialState,
	reducers: {
		resetMessages(state) {
			state.messages = initialMessages;
		},
		addClientMessage(state, action: PayloadAction<string>) {
			const message: Message = {
				role: "user",
				content: action.payload,
			};
			state.messages.push(message);
		},
	},
});

export const { resetMessages, addClientMessage } = chatbotSlice.actions;
export default chatbotSlice.reducer;
