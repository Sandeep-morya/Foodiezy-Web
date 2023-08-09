import { useMemo } from "react";

const ServicesInCities = () => {
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
					className={`text-base font-bold ${
						index % 2 ? "text-gray-400" : "text-gray-600"
					}`}>
					{city}
				</span>
			))}
		</div>
	);
};

export default ServicesInCities;
