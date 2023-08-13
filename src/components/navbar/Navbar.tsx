import {
	PiBell,
	PiHeart,
	PiShoppingBag,
	PiShoppingBagOpenLight,
	PiUserCircle,
} from "react-icons/pi";

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
	const count = 4;
	const favourites = 3;
	return (
		<header
			className={`w-full h-[60px] fixed top-0 z-40 flex justify-between py-2 px-4 items-center lg:h-[80px] md:px-12 lg:px-4 2xl:px-44 bg-white`}>
			<div>
				<Logo />
			</div>
			<div className="hidden lg:flex">
				<SearchBar />
			</div>
			<nav className="flex items-center gap-5 xl:gap-8">
				<IconButton href="#" count={1} element={<PiBell />} />
				<IconButton href="#" count={2} element={<PiUserCircle />} />
				<IconButton href="#" count={favourites} element={<PiHeart />} />
				<div className="flex items-center gap-4 divide-x">
					<IconButton
						href="#"
						count={count}
						element={count ? <PiShoppingBag /> : <PiShoppingBagOpenLight />}
					/>

					<div className="items-start hidden h-full pl-4 md:grid">
						<p className="text-xs text-lightblack">Your Bag</p>
						<h2 className="font-medium">{!count ? "is Empty" : `₹ 789`}</h2>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
