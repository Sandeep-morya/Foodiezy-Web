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
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import Drawer from "../common/Drawer";
import CartContent from "../cart/CartContent";
import FavouritesContent from "../favourites/FavouritesContent";
import NotificationsContent from "../notifcations/NotificationsContent";

const Navbar = () => {
	const navigate = useNavigate();
	const [showCartDrawer, setShowCartDrawer] = useState(false);
	const toggleCartDrawer = useCallback(() => {
		setShowCartDrawer((e) => !e);
	}, []);

	const [showFavouritesDrawer, setShowFavouritesDrawer] = useState(false);
	const toggleFavouritesDrawer = useCallback(() => {
		setShowFavouritesDrawer((e) => !e);
	}, []);

	const [showNotificationsDrawer, setShowNotificationsDrawer] = useState(false);
	const toggleNotificationsDrawer = useCallback(() => {
		setShowNotificationsDrawer((e) => !e);
	}, []);
	// const [isScrolled, setIsScrolled] = useState(false);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const scrollPosition = window.pageYOffset;
	// 		setIsScrolled(scrollPosition > 0);
	// 	};
	// 	window.onscroll = handleScroll;
	// }, []);
	// console.log({ isScrolled });

	const count = 0;
	return (
		<header
			className={`w-full h-[60px] fixed top-0 z-40 flex justify-between py-2 px-4 items-center lg:h-[80px] md:px-12 lg:px-4 2xl:px-44 bg-white`}>
			<div onClick={() => navigate("/")}>
				<Logo />
			</div>
			<div className="hidden lg:flex">
				<SearchBar />
			</div>
			<nav className="flex items-center gap-5 xl:gap-8">
				<IconButton
					onClick={toggleNotificationsDrawer}
					asButton
					element={<PiBell />}
				/>
				<IconButton asButton element={<PiUserCircle />} />
				<IconButton
					onClick={toggleFavouritesDrawer}
					asButton
					element={<PiHeart />}
				/>
				<div className="flex items-center gap-4 divide-x">
					<IconButton
						asButton
						element={count ? <PiShoppingBag /> : <PiShoppingBagOpenLight />}
						onClick={toggleCartDrawer}
					/>

					<div className="items-start hidden h-full pl-4 md:grid">
						<p className="text-xs text-lightblack">Your Bag</p>
						<h2 className="font-medium">{!count ? "is Empty" : `₹ 789`}</h2>
					</div>
				</div>
			</nav>
			{showCartDrawer && (
				<Drawer
					content={<CartContent />}
					label="Cart"
					right
					toggleDrawer={toggleCartDrawer}
					// slideEffect={200}
				/>
			)}
			{showFavouritesDrawer && (
				<Drawer
					content={<FavouritesContent />}
					label="Favourites"
					right
					toggleDrawer={toggleFavouritesDrawer}
					// slideEffect={200}
				/>
			)}
			{showNotificationsDrawer && (
				<Drawer
					content={<NotificationsContent />}
					label="Notifications"
					right
					toggleDrawer={toggleNotificationsDrawer}
					// slideEffect={200}
				/>
			)}
		</header>
	);
};

export default Navbar;
