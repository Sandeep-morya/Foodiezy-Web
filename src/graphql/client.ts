import { ApolloClient, InMemoryCache } from "@apollo/client";

const { VITE_API_CYCLIC } = import.meta.env;
const client = new ApolloClient({
	uri: VITE_API_CYCLIC,
	cache: new InMemoryCache(),
});
export default client;
