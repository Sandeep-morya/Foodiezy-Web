import { useMemo } from "react";

import { useAppDispatch } from "../../hook/reduxHooks";
import { setServiceArea } from "../../redux/slices/deviceSlice";

const ServicesInCities = () => {
	const dispatch = useAppDispatch();
	const cities = useMemo(() => {
		const mixedCities =
			"AhmedabadBangaloreChennaiDelhiGuwahatiHyderabadKolkataLudhianaMumbaiPuneVaranasi&more.";
		return mixedCities.split(/(?=[A-Z&])/);
	}, []);
	return (
		<div className="flex flex-wrap gap-2 mt-4">
			{cities.map((city, index) => (
				<span
					key={"cities" + index}
					onClick={() => dispatch(setServiceArea({ name: city }))}
					className={`text-base cursor-pointer font-bold ${
						index % 2 ? "text-gray-400" : "text-gray-600"
					}`}>
					{city}
				</span>
			))}
		</div>
	);
};

export default ServicesInCities;
