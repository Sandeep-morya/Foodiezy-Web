import { useState, useCallback } from "react";
import { Message } from "../types";
// import { AiResponse } from "../types";
const { VITE_API_URL, VITE_OPENAI_KEY } = import.meta.env;
const useChatGpt = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const askAnandi = useCallback(async (messages: Message[]) => {
		setLoading(true);
		try {
			const response = await fetch(VITE_API_URL, {
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
			return data?.choices[0]?.message;
		} catch (error) {
			setError(true);
		} finally {
			setLoading(false);
		}
	}, []);

	return { loading, error, askAnandi };
};

export default useChatGpt;
