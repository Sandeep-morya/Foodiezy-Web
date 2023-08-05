﻿import {
	PiHeart,
	PiMagnifyingGlass,
	PiShoppingCart,
	PiUserCircle,
} from "react-icons/pi";
import IconButton from "./IconButton";
// import { useAppSelector } from "../../hook/reduxHooks";
import Logo from "./Logo";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
	// const { geo_location } = useAppSelector((store) => store.device);
	return (
		<header className="w-screen bg-[#f9f9f9] h-[60px] flex justify-between py-2 px-4 items-center shadow-md md:px-8 lg:h-[70px] lg:px-16 2xl:px-24">
			<Logo />
			<div className="hidden h-[45px] w-[500px] border rounded-md overflow-hidden bg-white shadow-sm lg:flex xl:w-[600px]">
				<div className="h-full w-[150px] text-white bg-black flex items-center justify-center gap-2">
					<p className="text-sm font-medium">All Categories</p>
					<FaAngleDown />
				</div>
				{/* <div></div> */}
				<div className="flex items-center flex-1 gap-4 px-4">
					<input
						className="flex-1 outline-none text-md placeholder:text-gray-300 focus:border-none"
						type="text"
						placeholder="I am looking for..."
					/>
					<PiMagnifyingGlass size={18} />
				</div>
			</div>
			<nav className="flex items-center gap-5">
				<IconButton href="#" element={<PiUserCircle />} />
				<IconButton href="#" count={3} element={<PiHeart />} />

				<div className="flex items-center gap-5">
					<IconButton href="#" count={4} element={<PiShoppingCart />} />

					<div className="items-start hidden h-full md:grid">
						<p className="text-xs text-black/50">Your Cart</p>
						<h2 className="font-medium">₹ 789</h2>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
