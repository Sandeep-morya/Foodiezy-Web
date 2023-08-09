import { useCallback, useState, useEffect } from "react";
import { MdOutlineMyLocation } from "react-icons/md";
import { PiMagnifyingGlass } from "react-icons/pi";
import { useAppDispatch } from "../../hook/reduxHooks";
import { setServiceArea } from "../../redux/deviceSlice";
import {
	findAddress,
	findAddressWithCoordinates,
	geolocationError,
} from "../../utils/geoLocation";
import { Coordinates, MapLocations, ServiceArea } from "../../types";
import useDebounce from "../../hook/useDebounce";
import TonedString from "./TonedString";
import { ClipLoader } from "react-spinners";

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
				const serviceArea: ServiceArea = {
					name:
						data.address.state === "Delhi"
							? "Delhi"
							: data.address.city || data.address.state_district,
					lat: +data.lat,
					lng: +data.lon,
				};
				dispatch(setServiceArea(serviceArea));
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
						className="w-full h-full p-4 pl-10 bg-[#f9f9f9] font-semibold text-sm placeholder:text-gray-300 focus:border-none outline-none lg:text-lg"
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
					<div className="absolute bg-[#f9f9f9] z-10 w-full justify-center items-center border left-0 top-full shadow-sm">
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
				className="h-full w-[90px] bg-[#7ed957] text-xs justify-center items-center text-white font-bold uppercase md:w-[180px] md:text-lg">
				{isLoading ? <ClipLoader color="white" /> : "Find food"}
			</button>
		</div>
	);
};

export default SearchBar;
