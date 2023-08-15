import { Buffer } from "buffer";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import AllRoutes from "./routes";

const { VITE_API_CYCLIC, VITE_API_ACCESS_KEY } = import.meta.env;

const client = new ApolloClient({
	uri: VITE_API_CYCLIC + "/graphql",
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Basic ${Buffer.from(VITE_API_ACCESS_KEY).toString(
			"base64",
		)}`,
	},
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<AllRoutes />
		</ApolloProvider>
	);
};

export default App;
