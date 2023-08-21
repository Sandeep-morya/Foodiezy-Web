import { Buffer } from "buffer";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import AllRoutes from "./routes";
import { GoogleOAuthProvider } from "@react-oauth/google";

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

const App = () => {
	// const [loading, setLoading] = useState(false);
	// const dispatch = useAppDispatch();

	// if (id) {
	// 	setLoading(true);
	// 	client
	// 		.query({
	// 			query: GET_USER,
	// 			variables: { id },
	// 		})

	// 	setLoading(false);
	// }
	// if (loading) {
	// 	return <>Loading...</>;
	// }
	return (
		<GoogleOAuthProvider clientId={VITE_GOOGLE_CLIENT_ID}>
			<ApolloProvider client={client}>
				<AllRoutes />
			</ApolloProvider>
		</GoogleOAuthProvider>
	);
};

export default App;
