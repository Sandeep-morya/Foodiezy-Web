import { Route, Routes } from "react-router-dom";

import {
	AdminLoginPage,
	ErrorPage,
	HeroPage,
	HomePage,
	RestaurantPage,
} from "./pages";
import LocationProvider from "./provider/LocationProvider";

export default function AllRoutes() {
	return (
		<Routes>
			<Route path="/" Component={HeroPage} />
			<Route
				path="/:serviceAreaName"
				element={
					<LocationProvider>
						<HomePage />
					</LocationProvider>
				}
			/>
			<Route path="/restaurant/:id" Component={RestaurantPage} />

			<Route path="/admin/login" element={<AdminLoginPage />} />
			<Route path="*" Component={ErrorPage} />
		</Routes>
	);
}
