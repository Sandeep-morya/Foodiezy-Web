import {
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
import { useAppSelector } from "../../hook/reduxHooks";
import useDebounce from "../../hook/useDebounce";
import { useMutation } from "@apollo/client";
import { MUTATE_CART } from "../../utils/resolvers";
import { CartItem } from "../../types";
import LoginModal from "../auth/LoginModal";

const Navbar = () => {
	const navigate = useNavigate();

	const user = useAppSelector((store) => store.user);
	const cart = useAppSelector((store) => store.cart);
	const debouncedCart = useDebounce(cart, 700);
	const [mutateCart] = useMutation(MUTATE_CART);

	const [showLoginModal, setShowLoginModal] = useState(user.token === null);
	const toggleLoginModal = user.token
		? () => {}
		: () => setShowLoginModal((e) => !e);

	const [showCartDrawer, setShowCartDrawer] = useState(false);
	const toggleCartDrawer = () =>
		user.token ? setShowCartDrawer((e) => !e) : toggleLoginModal();

	const [showFavouritesDrawer, setShowFavouritesDrawer] = useState(false);
	const toggleFavouritesDrawer = () =>
		user.token ? setShowFavouritesDrawer((e) => !e) : toggleLoginModal();

	const cartPrice = useMemo(() => {
		const totalPaisa = cart.reduce(
			(acc, el) => (acc += el.price * el.count),
			0,
		);
		return (totalPaisa / 100).toFixed();
	}, [cart]);

	const navigateToHome = () => {
		navigate("/");
	};

	const MutateCart = useCallback(
		async (debouncedCart: CartItem[], userId: string) => {
			try {
				await mutateCart({
					variables: { cartInput: debouncedCart, userId },
				});
			} catch (error) {
				console.log(error);
			}
		},
		[mutateCart],
	);

	useEffect(() => {
		if (user.about) {
			MutateCart(debouncedCart, user.about._id);
		}
	}, [debouncedCart, MutateCart, user.about]);

	useEffect(() => {
		if (user.token) {
			setShowLoginModal(false);
		}
	}, [user]);

	return (
		<header
			className={`w-full h-[60px] fixed top-0 z-40 flex justify-between py-2 px-4 items-center lg:h-[80px] md:px-12 lg:px-4 2xl:px-44 bg-white`}>
			<div onClick={navigateToHome}>
				<Logo />
			</div>
			<div className="hidden lg:flex">
				<SearchBar />
			</div>
			<nav className="flex items-center gap-5 xl:gap-8">
				<IconButton
					asButton
					// onClick={user.about ? () => {} : () => navigate("/user/login")}
					onClick={toggleLoginModal}
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
			{showLoginModal && <LoginModal toggleModal={toggleLoginModal} />}
		</header>
	);
};

export default Navbar;

// const [isScrolled, setIsScrolled] = useState(false);

// useEffect(() => {
// 	const handleScroll = () => {
// 		const scrollPosition = window.pageYOffset;
// 		setIsScrolled(scrollPosition > 0);
// 	};
// 	window.onscroll = handleScroll;
// }, []);
// console.log({ isScrolled });

/* <IconButton
					onClick={toggleNotificationsDrawer}
					asButton
					element={<PiBell />}
				/>


					const [showNotificationsDrawer, setShowNotificationsDrawer] = useState(false);
	const toggleNotificationsDrawer = () =>
		user.token
			? setShowNotificationsDrawer((e) => !e)
			: navigate("/user/login");



					{showNotificationsDrawer && (
				<Drawer
					content={<NotificationsContent />}
					label="Notifications"
					right
					toggleDrawer={toggleNotificationsDrawer}
					// slideEffect={200}
				/>
			)}

				*/
