import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Buffer } from "buffer";

const { VITE_API_CYCLIC, VITE_API_ACCESS_KEY } = import.meta.env;
const client = new ApolloClient({
	uri: VITE_API_CYCLIC,
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Basic ${Buffer.from(VITE_API_ACCESS_KEY).toString(
			"base64",
		)}`,
	},
});
export default client;
