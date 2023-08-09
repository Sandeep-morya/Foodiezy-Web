import { Route, Routes } from "react-router-dom";
import { HeroPage, HomePage, ErrorPage, AdminLoginPage } from "./pages";
import LocationProvider from "./provider/LocationProvider";

export default function AllRoutes() {
	return (
		<Routes>
			<Route path="/" element={<HeroPage />} />
			<Route
				path="/:serviceAreaName"
				element={
					<LocationProvider>
						<HomePage />
					</LocationProvider>
				}
			/>
			<Route path="/admin/login" element={<AdminLoginPage />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
}
