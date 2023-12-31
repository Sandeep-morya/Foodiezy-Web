// :: React Hooks and Redux Imports ::
import { useMemo } from "react";
import { useAppDispatch } from "../../hook/reduxHooks";
import { setServiceArea } from "../../redux/slices/deviceSlice";
import { v4 } from "uuid";

const ServicesInCities = () => {
	const dispatch = useAppDispatch();
	const cities = useMemo(() => {
		const mixedCities =
			"AhmedabadBengaluruChennaiDelhiGuwahatiHyderabadKolkataLudhianaMumbaiPuneVaranasi&more.";
		return mixedCities.split(/(?=[A-Z&])/);
	}, []);

	return (
		<div className="flex flex-wrap gap-2 mt-4">
			{cities.map((city, index) => (
				<button
					key={v4()}
					aria-label={`Select ${city}`}
					onClick={() => dispatch(setServiceArea({ name: city }))}
					className={`text-base cursor-pointer font-bold ${
						index % 2 ? "text-gray-400" : "text-gray-600"
					}`}>
					{city}
				</button>
			))}
		</div>
	);
};

export default ServicesInCities;
