import { useCallback, useEffect, useState } from "react";

import { MdLocationOn, MdOutlineLocationOff,MdMyLocation } from "react-icons/md";
import Input from "../common/Input";
import FilterButton from "../home/FilterButton";
import { useNavigate } from "react-router-dom";
import { cities as listCities } from "../../utils/data";
import Button from "../common/Button";
import { useAppDispatch } from "../../hook/reduxHooks";
import { setServiceArea } from "../../redux/deviceSlice";

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
		<div className="flex flex-col p-2 w-full h-full">
			<Input
				leftIcon={<MdLocationOn />}
				placeholder="Where is your loaction ?"
				rightIcon={<MdMyLocation />}
				value={query}
				onKeyDownCapture={(e) => console.log(e)}
				onChange={(e) => setQuery(e.target.value.trim())}
			/>
			<div className="flex flex-wrap gap-2 mt-5">
				{cities.map((city, index) => (
					<FilterButton
						key={city + index}
						onClick={() => handleChangeCity(city)}
						title={city}
					/>
				))}
			</div>
			{cities.length === 0 && (
				<div className="flex p-2 flex-col items-center gap-4">
					<div className="text-6xl  text-black/50">
						<MdOutlineLocationOff />
					</div>
					<div className="text-center">
						<p className="text-sm">{`"${query}" is not in our service areas.`}</p>
						<h2 className="font-bold">We are avialable in cities below.</h2>
					</div>
					<div className="flex flex-wrap gap-2">
						{listCities.map((city, index) => (
							<FilterButton
								key={city + index}
								onClick={() => handleChangeCity(city)}
								title={city}
							/>
						))}
					</div>
					<Button
						className="rounded-full bg-primary text-white py-2 px-6 flex items-center justify-center space-x-2"
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
