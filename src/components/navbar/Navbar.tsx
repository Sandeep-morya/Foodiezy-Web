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
import { useCallback, useEffect, useMemo, useState } from "react";
import Drawer from "../common/Drawer";
import CartContent from "../cart/CartContent";
import FavouritesContent from "../favourites/FavouritesContent";
import NotificationsContent from "../notifcations/NotificationsContent";
import { useAppSelector } from "../../hook/reduxHooks";
import useDebounce from "../../hook/useDebounce";
import { useMutation } from "@apollo/client";
import { MUTATE_CART } from "../../utils/resolvers";
import { CartItem } from "../../types";

const Navbar = () => {
	const navigate = useNavigate();

	const user = useAppSelector((store) => store.user);
	const [showCartDrawer, setShowCartDrawer] = useState(false);
	const cart = useAppSelector((store) => store.cart);
	const debouncedCart = useDebounce(cart, 1000);
	const [mutateCart] = useMutation(MUTATE_CART);

	const toggleCartDrawer = useCallback(() => {
		if (user && user.token) {
			setShowCartDrawer((e) => !e);
		} else {
			navigate("/user/login");
		}
	}, [navigate, user]);

	const [showFavouritesDrawer, setShowFavouritesDrawer] = useState(false);
	const toggleFavouritesDrawer = useCallback(() => {
		if (user && user.token) {
			setShowFavouritesDrawer((e) => !e);
		} else {
			navigate("/user/login");
		}
	}, [navigate, user]);

	const [showNotificationsDrawer, setShowNotificationsDrawer] = useState(false);
	const toggleNotificationsDrawer = useCallback(() => {
		if (user && user.token) {
			setShowNotificationsDrawer((e) => !e);
		} else {
			navigate("/user/login");
		}
	}, [navigate, user]);

	const cartPrice = useMemo(() => {
		const totalPaisa = cart.reduce(
			(acc, el) => (acc += el.price * el.count),
			0,
		);
		return (totalPaisa / 100).toFixed(1);
	}, [cart]);
	// const [isScrolled, setIsScrolled] = useState(false);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const scrollPosition = window.pageYOffset;
	// 		setIsScrolled(scrollPosition > 0);
	// 	};
	// 	window.onscroll = handleScroll;
	// }, []);
	// console.log({ isScrolled });

	const MutateCart = useCallback(
		async (debouncedCart: CartItem[], token: string) => {
			await mutateCart({
				variables: { cartInput: debouncedCart },
				context: {
					headers: {
						authorization: `Bearer ${token}`,
					},
				},
			});
		},
		[mutateCart],
	);

	useEffect(() => {
		console.log("sent to db");
		if (user.token) {
			MutateCart(debouncedCart, user.token);
		}
	}, [debouncedCart, user, MutateCart]);

	console.log({ cart, user });

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
				<IconButton
					asButton
					onClick={user.about ? () => {} : () => navigate("/user/login")}
					element={
						user.about ? (
							<img
								className="w-full h-full rounded-full"
								src={user.about.image}
								alt={user.about.name[0]}
							/>
						) : (
							<PiUserCircle />
						)
					}
				/>
				<IconButton
					onClick={toggleFavouritesDrawer}
					asButton
					element={<PiHeart />}
				/>
				<div className="flex items-center gap-4 divide-x">
					<IconButton
						asButton
						count={cart.length}
						element={
							cart.length > 0 ? <PiShoppingBag /> : <PiShoppingBagOpenLight />
						}
						onClick={toggleCartDrawer}
					/>

					<div className="items-start hidden h-full pl-4 md:grid">
						<p className="text-xs text-lightblack">Your Bag</p>
						<h2 className="font-medium">
							{cart.length > 0 ? `₹${cartPrice}` : "is Empty"}
						</h2>
					</div>
				</div>
			</nav>
			{showCartDrawer && (
				<Drawer
					content={<CartContent {...{ cartPrice }} />}
					label="Your Bag"
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
