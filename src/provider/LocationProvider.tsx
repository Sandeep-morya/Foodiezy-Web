import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../hook/reduxHooks";
import { setServiceArea } from "../redux/slices/deviceSlice";
import { cities } from "../utils/constants";

const LocationProvider = ({ children }: { children: JSX.Element }) => {
	const { serviceAreaName } = useParams();
	const { serviceArea } = useAppSelector((store) => store.device);
	const dispatch = useAppDispatch();
	const [unKnown, setUnKnown] = useState(false);

	useEffect(() => {
		// Handle initial checks and state updates
		if (serviceAreaName) {
			const normalizedServiceAreaName = serviceAreaName.toLowerCase();

			if (
				!serviceArea ||
				serviceArea.name.toLowerCase() !== normalizedServiceAreaName
			) {
				const matchingCity = cities.find(
					(city) => city.toLowerCase() === normalizedServiceAreaName,
				);

				if (matchingCity) {
					dispatch(setServiceArea({ name: matchingCity }));
				} else {
					setUnKnown(true);
				}
			}
		}
	}, [dispatch, serviceArea, serviceAreaName]);

	if (unKnown) {
		return <Navigate to={`*`} />;
	}

	if (!serviceArea) {
		return <Navigate to={"/"} />;
	}

	return children;
};

export default LocationProvider;
