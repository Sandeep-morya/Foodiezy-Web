import { useLayoutEffect } from "react";
import { useAppDispatch } from "./hook/reduxHooks";
import AllRoutes from "./routes";
import { loadFromLocalStorage } from "./redux/deviceSlice";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Buffer } from "buffer";

const { VITE_API_CYCLIC, VITE_AUTH_TOKEN } = import.meta.env;

const client = new ApolloClient({
	uri: VITE_API_CYCLIC + "/graphql",
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Basic ${Buffer.from(VITE_AUTH_TOKEN).toString("base64")}`,
	},
});

const App = () => {
	const dispatch = useAppDispatch();
	useLayoutEffect(() => {
		dispatch(loadFromLocalStorage());
	}, [dispatch]);

	return (
		<ApolloProvider client={client}>
			<AllRoutes />
		</ApolloProvider>
	);
};

export default App;
