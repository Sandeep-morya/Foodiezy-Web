import { Route, Routes } from "react-router-dom";

import {
	AdminLoginPage,
	ErrorPage,
	LandingPage,
	HomePage,
	RestaurantPage,
} from "./pages";
import LocationProvider from "./provider/LocationProvider";

export default function AllRoutes() {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} errorElement={<ErrorPage />} />
			<Route
				path="/:serviceAreaName"
				element={
					<LocationProvider>
						<HomePage />
					</LocationProvider>
				}
			/>
			<Route
				path="/restaurant/:id"
				element={<RestaurantPage />}
				errorElement={<ErrorPage />}
			/>
			<Route
				path="/admin/login"
				element={<AdminLoginPage />}
				errorElement={<ErrorPage />}
			/>

			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
}
