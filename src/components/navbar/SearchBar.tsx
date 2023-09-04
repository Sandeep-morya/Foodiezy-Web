import { useCallback, useState, useEffect } from "react";
import { MdLocationOn } from "react-icons/md";
import { PiMagnifyingGlass } from "react-icons/pi";

import { useAppSelector } from "../../hook/reduxHooks";
import Drawer from "../common/Drawer";
import Logo from "../common/Logo";
import LocationDrawerContent from "./LocationDrawerContent";
import SearchDrawerContent from "./SearchDrawerContent";

const SearchBar = () => {
	const { serviceArea } = useAppSelector((store) => store.device);
	const [showLocationDrawer, setShowLocationDrawer] = useState(false);
	const [showSearchDrawer, setShowSearchDrawer] = useState(false);
	const toggleLocationDrawer = useCallback(() => {
		setShowLocationDrawer((e) => !e);
	}, []);
	const toggleSearchDrawer = useCallback(() => {
		setShowSearchDrawer((e) => !e);
	}, []);

	useEffect(() => {
		const handleKeyDown = (event: globalThis.KeyboardEvent) => {
			if (event.altKey && event.shiftKey) {
				if (event.key === "F") {
					toggleSearchDrawer();
				}
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [toggleSearchDrawer]);

	return (
		<div className="relative flex items-center gap-1 h-[45px] w-full border rounded-md  bg-white shadow-sm md:gap-2 lg:w-[500px] xl:w-[550px] 2xl:w-[650px]">
			<div
				onClick={toggleLocationDrawer}
				className="flex items-center justify-start gap-1 px-3 text-black/30">
				<MdLocationOn />
				<p className="text-sm font-medium uppercase">
					{serviceArea?.name || "..."}
				</p>
			</div>
			{showLocationDrawer && (
				<Drawer
					content={
						<LocationDrawerContent toggleDrawer={toggleLocationDrawer} />
					}
					label={"Select Your City"}
					toggleDrawer={toggleLocationDrawer}
				/>
			)}
			<div className="text-black/10 mb-0.5">{"|"}</div>
			<div className="flex items-center justify-between flex-1 pl-2 pr-4 gap-x-3">
				<div className="flex-1 overflow-hidden flex items-center">
					<input
						className="w-full text-sm outline-none placeholder:text-black/30 focus:border-none md:text-base disabled:bg-white text-ellipsis"
						onClick={toggleSearchDrawer}
						type="text"
						placeholder="Looking for something tasty? Start here..."
					/>
					<div className="hidden xl:flex items-center gap-1 text-xs">
						<kbd className="w-auto px-1 h-auto bg-gray-200 shadow rounded center">
							Alt
						</kbd>
						<kbd className="w-auto px-1 h-auto bg-gray-200 shadow rounded center">
							Shift
						</kbd>

						<kbd className="w-auto px-1 h-auto bg-gray-200 shadow rounded center">
							F
						</kbd>
					</div>
				</div>
				<div className="block xl:hidden">
					<PiMagnifyingGlass size={18} />{" "}
				</div>
				{showSearchDrawer && (
					<Drawer
						content={
							<SearchDrawerContent
								toggleDrawer={toggleSearchDrawer}
								serviceAreaId={serviceArea?._id}
							/>
						}
						label={
							<div>
								<Logo />
							</div>
						}
						toggleDrawer={toggleSearchDrawer}
					/>
				)}
			</div>
		</div>
	);
};

export default SearchBar;
