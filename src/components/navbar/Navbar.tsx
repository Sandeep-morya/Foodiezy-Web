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
import { useAppDispatch, useAppSelector } from "../../hook/reduxHooks";
import useDebounce from "../../hook/useDebounce";
import { useLazyQuery, useMutation } from "@apollo/client";
import { CartItem } from "../../types";
import LoginModal from "../auth/LoginModal";
import UserAfterLogin from "../user/UserAfterLogin";
import { getItem } from "../../utils/localStorage";
import { initiateUser } from "../../redux/slices/userSlice";
import { initiateCart } from "../../redux/slices/cartSlice";
import { GET_USER, MUTATE_CART } from "../../graphql/resolvers";

const Navbar = () => {
	const navigate = useNavigate();
	const localData = getItem("foodiezy-user") as
		| { id: string; name: string }
		| undefined;
	const id = localData?.id;
	const [getUser] = useLazyQuery(GET_USER);
	const dispatch = useAppDispatch();

	const user = useAppSelector((store) => store.user);
	const cart = useAppSelector((store) => store.cart);
	const debouncedCart = useDebounce(cart, 700);
	const [mutateCart] = useMutation(MUTATE_CART);

	const [showLoginModal, setShowLoginModal] = useState(!id);
	const toggleLoginModal = user.token
		? () => {}
		: () => setShowLoginModal((e) => !e);

	const [showUserAboutModal, setShowUserAboutModal] = useState(false);
	const toggleUserAboutModal = () => setShowUserAboutModal((e) => !e);

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

	useEffect(() => {
		if (id && !user.token) {
			getUser({ variables: { id } }).then(({ data }) => {
				const token = id;
				const { _id, name, email, image, provider, cart } = data.getUser;
				const about = { _id, name, email, image, provider };
				dispatch(initiateUser({ token, about }));
				dispatch(
					initiateCart(
						cart.map((e: CartItem) => ({
							category: e.category,
							count: e.count,
							dishId: e.dishId,
							dishName: e.dishName,
							imageId: e.imageId,
							price: e.price,
							restaurantId: e.restaurantId,
							restaurantName: e.restaurantName,
						})),
					),
				);
			});
		}
	}, [id, user.token, getUser, dispatch]);

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
				<div className="relative">
					<IconButton
						asButton
						onClick={user.about ? toggleUserAboutModal : toggleLoginModal}
						element={
							user.about ? (
								<img
									className="w-full h-full rounded-full border"
									src={user.about.image}
									alt={user.about.name}
									onError={(e) => {
										e.currentTarget.src = "/user.png";
									}}
								/>
							) : (
								<PiUserCircle />
							)
						}
					/>

					{showUserAboutModal && (
						<UserAfterLogin toggle={toggleUserAboutModal} />
					)}
				</div>

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
