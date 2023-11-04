import { ApolloProvider } from "@apollo/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { lazy, Suspense } from "react";
import FullScreenLoader from "./components/common/FullScreenLoader";
import client from "./graphql/client";
import ThemeProvider from "./provider/ThemeProvider";

const { VITE_GOOGLE_CLIENT_ID } = import.meta.env;

const AllRoutes = lazy(() => import("./routes"));

const App = () => {
	return (
		<GoogleOAuthProvider clientId={VITE_GOOGLE_CLIENT_ID}>
			<ApolloProvider client={client}>
				<ThemeProvider>
					<Suspense fallback={<FullScreenLoader />}>
						<AllRoutes />
					</Suspense>
				</ThemeProvider>
			</ApolloProvider>
		</GoogleOAuthProvider>
	);
};

export default App;
