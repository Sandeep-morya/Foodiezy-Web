import { useLayoutEffect } from "react";
import { useAppDispatch } from "./hook/reduxHooks";
import AllRoutes from "./routes";
import { loadFromLocalStorage } from "./redux/deviceSlice";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import.meta.env.VITE_API_URL;

const client = new ApolloClient({
	uri: import.meta.env.VITE_API_PRODUCTION_URL + "/graphql",
	cache: new InMemoryCache(),
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
