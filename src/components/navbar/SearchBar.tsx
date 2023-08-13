import { useCallback, useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import { PiMagnifyingGlass } from 'react-icons/pi';

import { useAppSelector } from '../../hook/reduxHooks';
import Drawer from '../common/Drawer';
import Logo from '../common/Logo';
import LocationDrawerContent from './LocationDrawerContent';
import SearchDrawerContent from './SearchDrawerContent';

const SearchBar = () => {
	const { serviceArea } = useAppSelector((store) => store.device);
	const [showLocationDrawer, setShowLocationDrawer] = useState(false);
	const [showSearchDrawer, setShowSearchDrawer] = useState(false);

	const toggleLocationDrawer = useCallback(() => {
		setShowLocationDrawer((e) => (e ? false : true));
	}, []);
	const toggleSearchDrawer = useCallback(() => {
		setShowSearchDrawer((e) => (e ? false : true));
	}, []);

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
				<div onClick={toggleSearchDrawer} className="flex-1 overflow-hidden">
					<input
						className="w-full text-sm outline-none placeholder:text-black/30 focus:border-none md:text-base disabled:bg-white"
						disabled
						type="text"
						placeholder="Looking for something tasty? Start here..."
					/>
				</div>
				{showSearchDrawer && (
					<Drawer
						content={<SearchDrawerContent toggleDrawer={toggleSearchDrawer} />}
						right
						label={
							<div>
								<Logo />
							</div>
						}
						toggleDrawer={toggleSearchDrawer}
					/>
				)}
				<PiMagnifyingGlass size={18} />
			</div>
		</div>
	);
};

export default SearchBar;
