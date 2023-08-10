import { useCallback } from "react";

import { MdLocationOn } from "react-icons/md";
import Input from "../common/Input";
import { PiMagnifyingGlass } from "react-icons/pi";
import FilterButton from "../home/FilterButton";
import { useNavigate } from "react-router-dom";
import { cities } from "../../utils/data";

const DrawerContent = ({ toggleDrawer }: { toggleDrawer: () => void }) => {
	const navigate = useNavigate();
	const handleChangeCity = useCallback(
		(name: string) => {
			navigate(`/${name}`);
			toggleDrawer();
		},
		[navigate, toggleDrawer],
	);
	return (
		<div className="p-2">
			<Input
				leftIcon={<MdLocationOn />}
				placeholder="Where is your loaction ?"
				rightIcon={<PiMagnifyingGlass />}
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
		</div>
	);
};

export default DrawerContent;
