import { Navigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hook/reduxHooks";
import { setServiceArea } from "../redux/deviceSlice";
import { cities } from "../utils/data";

const LocationProvider = ({ children }: { children: JSX.Element }) => {
	const { serviceAreaName } = useParams();
	const { serviceArea } = useAppSelector((store) => store.device);
	const dispatch = useAppDispatch();

	console.log("ser-b", serviceArea);

	if (serviceArea?.name?.toLowerCase() === serviceAreaName?.toLowerCase()) {
		return children;
	}

	console.log("executed");
	if (serviceAreaName) {
		for (const city of cities) {
			if (city.toLowerCase() === serviceAreaName.toLowerCase()) {
				dispatch(setServiceArea({ name: city }));
				return children;
			}
		}
		alert(`Our services are not in ${serviceAreaName}`);
	}
	return <Navigate to={"/"} />;
};

export default LocationProvider;
