import { MdLocationOn } from "react-icons/md";
import { PiMagnifyingGlass } from "react-icons/pi";
import { useParams } from "react-router-dom";
import Drawer from "../common/Drawer";
import { useCallback, useState } from "react";
import DrawerContent from "./DrawerContent";

const SearchBar = () => {
	const { serviceAreaName } = useParams();
	const [showDrawer, setShowDrawer] = useState(false);

	const toggleDrawer = useCallback(() => {
		setShowDrawer((e) => (e ? false : true));
	}, []);

	return (
		<div className="flex items-center gap-1 h-[45px] w-full border rounded-md overflow-hidden bg-white shadow-sm md:gap-2 lg:w-[500px] xl:w-[550px] 2xl:w-[650px]">
			<div
				onClick={toggleDrawer}
				className="flex items-center justify-start gap-1 px-3 text-black/30">
				<MdLocationOn />
				<p className="text-sm font-medium uppercase">{serviceAreaName}</p>
			</div>
			<Drawer
				content={<DrawerContent />}
				label={"Select Your City"}
				{...{ showDrawer, toggleDrawer }}
			/>
			<div className="text-black/10 mb-0.5">{"|"}</div>
			<div className="flex items-center flex-1 gap-4 pl-2 pr-4">
				<input
					className="flex-1 text-sm capitalize outline-none placeholder:text-black/30 focus:border-none md:text-base"
					type="text"
					placeholder="Looking for something tasty? Start here.."
				/>
				<PiMagnifyingGlass size={18} />
			</div>
		</div>
	);
};

export default SearchBar;
