import { useAppSelector } from "../hook/reduxHooks";
import { Navigate } from "react-router-dom";

const WhenGeoLocation = ({ children }: { children: JSX.Element }) => {
	const { geo_location } = useAppSelector((store) => store.device);
	return geo_location ? children : <Navigate to="/" />;
};

export default WhenGeoLocation;
