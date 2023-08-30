import { useCallback, useEffect, useState } from "react";
import {
	MdLocationOn,
	MdMyLocation,
	MdOutlineLocationOff,
} from "react-icons/md";
import { PiMagnifyingGlass } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../hook/reduxHooks";
import { setServiceArea } from "../../redux/slices/deviceSlice";
import { cities as listCities } from "../../utils/constants";
import Button from "../common/Button";
import Input from "../common/Input";
import FilterButton from "../home/Filters/FilterButton";

interface Props {
	cities: string[];
	handleChangeCity: (city: string) => void;
}

const RenderCities = ({ cities, handleChangeCity }: Props) => {
	return (
		<div className="flex flex-wrap gap-2 mt-5">
			{cities.map((city, index) => (
				<FilterButton
					key={city + index}
					onClick={() => handleChangeCity(city)}
					title={city}
				/>
			))}
		</div>
	);
};

const LocationDrawerContent = ({
	toggleDrawer,
}: {
	toggleDrawer: () => void;
}) => {
	const navigate = useNavigate();
	const [cities, setCities] = useState(listCities);
	const [query, setQuery] = useState("");
	const dispatch = useAppDispatch();
	const handleFindOnMap = useCallback(() => {
		dispatch(setServiceArea(null));
		navigate("/");
	}, [dispatch, navigate]);
	const handleChangeCity = useCallback(
		(name: string) => {
			navigate(`/${name}`);
			toggleDrawer();
		},
		[navigate, toggleDrawer],
	);

	useEffect(() => {
		setCities(() =>
			listCities.filter((city) =>
				city.toLowerCase().includes(query.toLowerCase()),
			),
		);
	}, [query]);
	return (
		<div className="flex flex-col w-full h-full p-2 pb-20 overflow-y-scroll vanish-scroll-bar ">
			<div>
				<Input
					leftIcon={<MdLocationOn />}
					placeholder="Where is your loaction ?"
					rightIcon={<PiMagnifyingGlass />}
					value={query}
					onKeyDownCapture={(e) => console.log(e)}
					onChange={(e) => setQuery(e.target.value.trim())}
				/>
			</div>

			<RenderCities {...{ cities, handleChangeCity }} />
			{cities.length === 0 && (
				<div className="flex flex-col items-center gap-4 p-2">
					<div className="text-6xl text-lightblack">
						<MdOutlineLocationOff />
					</div>
					<div className="text-center">
						<p className="text-sm">{`"${query}" is not in our service areas.`}</p>
						<h2 className="font-bold">We are avialable in cities below.</h2>
					</div>
					<RenderCities {...{ cities: listCities, handleChangeCity }} />
					<Button
						className="flex items-center justify-center px-6 py-2 space-x-2 text-white rounded-full bg-primary"
						onClick={handleFindOnMap}>
						<MdMyLocation size={20} />
						Detect My Location
					</Button>
				</div>
			)}
		</div>
	);
};

export default LocationDrawerContent;
