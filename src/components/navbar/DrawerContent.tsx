import { useCallback } from "react";

import { MdLocationOn } from "react-icons/md";
import Input from "../common/Input";
import { PiMagnifyingGlass } from "react-icons/pi";
import FilterButton from "../home/FilterButton";
import { useNavigate } from "react-router-dom";

const DrawerContent = ({ toggleDrawer }: { toggleDrawer: () => void }) => {
	const navigate = useNavigate();
	const handleChangeCity = useCallback(
		(name: string) => {
			toggleDrawer();
			navigate(`/${name}`);
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
				<FilterButton
					onClick={() => handleChangeCity("Ludhiana")}
					title="Ludhiana"
				/>
				<FilterButton
					onClick={() => handleChangeCity("Lucknow")}
					title="Lucknow"
				/>
				<FilterButton onClick={() => handleChangeCity("Delhi")} title="Delhi" />
				<FilterButton
					onClick={() => handleChangeCity("Mumbai")}
					title="Mumbai"
				/>
			</div>
		</div>
	);
};

export default DrawerContent;
