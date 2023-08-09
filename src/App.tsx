import AllRoutes from "./routes";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Buffer } from "buffer";

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
