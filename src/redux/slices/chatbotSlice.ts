import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Message } from "../../types";
import { systemContent, welcomeContent } from "../../utils/constants";

const { VITE_OPENAI_URL, VITE_OPENAI_KEY } = import.meta.env;

export const askAnandi = createAsyncThunk(
	"ask-anandi",
	async (messages: Message[]) => {
		const response = await fetch(VITE_OPENAI_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${VITE_OPENAI_KEY}`,
			},
			body: JSON.stringify({
				model: "gpt-3.5-turbo",
				messages,
			}),
		});
		const data = await response.json();
		const message: Message = {
			role: "assistant",
			content: data?.choices[0]?.message.content,
		};
		if (messages.at(-1)?.content.includes("rest")) {
			message.links = ["Find Restaurant", "Find Recipie"];
		}
		return message;
	},
);

const initialMessages: Message[] = [
	{ role: "system", content: systemContent },
	{ role: "assistant", content: welcomeContent, links: ["Find Restaurants"] },
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
	extraReducers: (builder) => {
		builder
			.addCase(askAnandi.pending, (state) => {
				state.loading = true;
				state.error = false;
			})
			.addCase(askAnandi.fulfilled, (state, action) => {
				state.loading = false;
				state.error = false;
				state.messages.push(action.payload);
			})
			.addCase(askAnandi.rejected, (state) => {
				state.error = true;
				state.loading = false;
			});
	},
});

export const { resetMessages, addClientMessage } = chatbotSlice.actions;
export default chatbotSlice.reducer;
