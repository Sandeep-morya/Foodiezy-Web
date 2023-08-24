import { Buffer } from "buffer";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { lazy, Suspense } from "react";
import FullScreenLoader from "./components/common/FullScreenLoader";

const { VITE_API_CYCLIC, VITE_API_ACCESS_KEY, VITE_GOOGLE_CLIENT_ID } =
	import.meta.env;

const client = new ApolloClient({
	uri: VITE_API_CYCLIC,
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Basic ${Buffer.from(VITE_API_ACCESS_KEY).toString(
			"base64",
		)}`,
	},
});

const AllRoutes = lazy(() => import("./routes"));

const App = () => {
	return (
		<GoogleOAuthProvider clientId={VITE_GOOGLE_CLIENT_ID}>
			<ApolloProvider client={client}>
				<Suspense fallback={<FullScreenLoader />}>
					<AllRoutes />
				</Suspense>
			</ApolloProvider>
		</GoogleOAuthProvider>
	);
};

export default App;
