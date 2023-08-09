import { PiHeart, PiShoppingCart, PiUserCircle } from "react-icons/pi";
// import { useState, useEffect } from "react";
import IconButton from "../common/IconButton";
// import { useAppSelector } from "../../hook/reduxHooks";
import Logo from "../common/Logo";
import SearchBar from "./SearchBar";

const Navbar = () => {
	// const [isScrolled, setIsScrolled] = useState(false);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const scrollPosition = window.pageYOffset;
	// 		setIsScrolled(scrollPosition > 0);
	// 	};
	// 	window.onscroll = handleScroll;
	// }, []);
	// console.log({ isScrolled });
	return (
		<header
			className={`w-full h-[60px] fixed top-0 z-50 flex justify-between py-2 px-4 items-center lg:h-[80px] md:px-12 lg:px-4 2xl:px-44 bg-white`}>
			<div>
				<Logo />
			</div>
			<div className="hidden lg:flex">
				<SearchBar />
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
