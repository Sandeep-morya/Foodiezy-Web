import { Route, Routes } from "react-router-dom";
import { HeroPage, HomePage, ErrorPage, AdminLoginPage } from "./pages";
import WhenGeoLocation from "./provider/WhenGeoLocation";

export default function AllRoutes() {
	return (
		<Routes>
			<Route path="/" element={<HeroPage />} />
			<Route
				path="/:city"
				element={
					<WhenGeoLocation>
						<HomePage />
					</WhenGeoLocation>
				}
			/>
			<Route path="/admin/login" element={<AdminLoginPage />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
}
