import {
	PiHeart,
	PiMagnifyingGlass,
	PiShoppingCart,
	PiUserCircle,
} from "react-icons/pi";
import { useState, useEffect } from "react";
import IconButton from "./IconButton";
// import { useAppSelector } from "../../hook/reduxHooks";
import Logo from "./Logo";
import { useParams } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

const Navbar = () => {
	const { serviceAreaName } = useParams();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.pageYOffset;
			setIsScrolled(scrollPosition > 0);
		};
		window.onscroll = handleScroll;
	}, []);
	console.log({ isScrolled });
	return (
		<header
			className={`w-screen sticky top-0 z-50 h-[60px] flex justify-between py-2 px-4 items-center md:px-8 lg:h-[80px] lg:px-16 2xl:px-24 bg-white ${
				isScrolled ? "shadow-md" : ""
			}`}>
			<div>
				<Logo />
			</div>
			<div className="hidden items-center gap-2 h-[45px] w-[500px] border rounded-md overflow-hidden bg-white shadow-sm lg:flex xl:w-[600px]">
				<div className="flex items-center justify-start gap-1 px-3 text-black/30">
					<MdLocationOn />
					<p className="text-sm font-medium uppercase">{serviceAreaName}</p>
				</div>
				<div className="text-black/10 mb-0.5">{"|"}</div>
				<div className="flex items-center flex-1 gap-4 pl-2 pr-4">
					<input
						className="flex-1 capitalize outline-none text-md placeholder:text-black/30 focus:border-none"
						type="text"
						placeholder="Looking for something tasty? Start here.."
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
