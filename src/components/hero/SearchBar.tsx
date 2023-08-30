import { useCallback, useEffect, useState } from "react";
import { MdOutlineMyLocation } from "react-icons/md";
import { PiMagnifyingGlass } from "react-icons/pi";

import { useAppDispatch } from "../../hook/reduxHooks";
import useDebounce from "../../hook/useDebounce";
import { setServiceArea } from "../../redux/slices/deviceSlice";
import { Coordinates, MapLocations } from "../../types";
import { cities } from "../../utils/data";
import {
	findAddress,
	findAddressWithCoordinates,
	geolocationError,
} from "../../utils/geoLocation";
import TonedString from "./TonedString";

const SearchBar = () => {
	const [query, setQuery] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [mapLocations, setMapLocations] = useState<MapLocations[]>();

	const dispatch = useAppDispatch();
	const debouncedQuery = useDebounce(query.trim());

	const handleUpdateAdddess = useCallback(
		async (coordinates: Coordinates) => {
			try {
				setIsError(false);
				setIsLoading(true);
				const data = await findAddressWithCoordinates(coordinates);

				const serviceArea = {
					name:
						data.address.state === "Delhi"
							? "Delhi"
							: data.address.city || data.address.state_district,
				};
				const matchingCity = cities.find((city) => city === serviceArea.name);
				if (matchingCity) {
					dispatch(setServiceArea({ name: matchingCity }));
				} else {
					alert("This area is not serviceable");
				}

				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				setIsError(true);
				console.error(error);
			}
		},
		[dispatch],
	);

	const getLocation = useCallback(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				const lat = position.coords.latitude;
				const lng = position.coords.longitude;
				handleUpdateAdddess({ lat, lng });
			}, geolocationError);
		} else {
			console.log("Geolocation is not supported by this browser.");
		}
	}, [handleUpdateAdddess]);

	const getAddress = useCallback(async (query: string) => {
		try {
			setIsLoading(true);
			const locations = await findAddress(query);
			setMapLocations(locations);
			setIsLoading(false);
		} catch (error) {
			console.error(error);
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		if (debouncedQuery) {
			getAddress(debouncedQuery);
		}
	}, [debouncedQuery, getAddress]);
	console.log({ isLoading, isError });

	return (
		<div className="w-full h-[50px] flex mt-10 my-8 md:h-[60px]">
			<div className="relative flex items-center flex-1 gap-4 border border-gray-300">
				<div className="relative flex items-center w-full h-full">
					<div className="absolute text-lg p-3 text-[#7ed957] md:text-xl">
						<PiMagnifyingGlass />
					</div>

					<input
						className="w-full h-full p-4 pl-10 text-sm font-semibold outline-none bg-secondary placeholder:text-gray-300 focus:border-none lg:text-lg"
						type="text"
						placeholder="Enter your delivery location"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
				</div>
				<div className="w-[40px] h-[80%] mr-3 flex items-center gap-2 justify-center text-gray-400 hover:bg-zinc-200 md:w-[180px]">
					<MdOutlineMyLocation onClick={getLocation} />
					<p className="hidden md:block">Locate me</p>
				</div>
				{/* Search Results */}
				{debouncedQuery && (
					<div className="absolute left-0 z-10 items-center justify-center w-full border shadow-sm bg-secondary top-full">
						{mapLocations &&
							mapLocations.map((e) => (
								<div
									key={e.place_id}
									onClick={() =>
										handleUpdateAdddess({ lat: e.lat, lng: e.lon })
									}>
									<TonedString value={e.display_name} query={debouncedQuery} />
								</div>
							))}
					</div>
				)}
			</div>
			<button
				disabled={isLoading}
				onClick={() => getAddress(debouncedQuery)}
				className="h-full w-[90px] bg-primary text-xs flex justify-center items-center text-white font-bold uppercase md:w-[180px] md:text-lg">
				{isLoading ? (
					<img
						className="h-[calc(100%-1.5rem)] aspect-square animate-spin brightness-0 invert"
						src="/only-smile.png"
						alt=""
					/>
				) : (
					"Find Food"
				)}
			</button>
		</div>
	);
};

export default SearchBar;
