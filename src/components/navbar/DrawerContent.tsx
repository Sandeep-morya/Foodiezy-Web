import { useCallback, useEffect, useState } from "react";

import { MdLocationOn } from "react-icons/md";
import Input from "../common/Input";
import { PiMagnifyingGlass } from "react-icons/pi";
import FilterButton from "../home/FilterButton";
import { useNavigate } from "react-router-dom";
import { cities as listCities } from "../../utils/data";
import Button from "../common/Button";
import { useAppDispatch } from "../../hook/reduxHooks";
import { setServiceArea } from "../../redux/deviceSlice";

const DrawerContent = ({ toggleDrawer }: { toggleDrawer: () => void }) => {
	const navigate = useNavigate();
	const [cities, setCities] = useState(listCities);
	const [query, setQuery] = useState("");
	const dispatch = useAppDispatch();
	const handleFindonMap = useCallback(() => {
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
		<div className="p-2">
			<Input
				leftIcon={<MdLocationOn />}
				placeholder="Where is your loaction ?"
				rightIcon={<PiMagnifyingGlass />}
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
				<div className="flex justify-center">
					<p>{`"${query}" is not in our service areas.`}</p>
					<Button onClick={handleFindonMap}>Click here to find on map</Button>
				</div>
			)}
		</div>
	);
};

export default DrawerContent;
