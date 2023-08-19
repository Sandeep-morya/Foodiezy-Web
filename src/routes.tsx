import { Route, Routes } from "react-router-dom";

import {
	AdminLoginPage,
	ErrorPage,
	LandingPage,
	HomePage,
	LoginPage,
	RestaurantPage,
} from "./pages";
import LocationProvider from "./provider/LocationProvider";

export default function AllRoutes() {
	return (
		<Routes>
			<Route path="/" Component={LandingPage} />
			<Route path="/restaurant/:id" Component={RestaurantPage} />
			<Route path="/admin/login" element={<AdminLoginPage />} />
			<Route path="/user/login" element={<LoginPage />} />
			<Route
				path="/:serviceAreaName"
				element={
					<LocationProvider>
						<HomePage />
					</LocationProvider>
				}
			/>

			<Route path="*" Component={ErrorPage} />
		</Routes>
	);
}
