import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	PiHeart,
	PiShoppingBag,
	PiShoppingBagOpen,
	PiUserCircle,
} from "react-icons/pi";

// :: Custom Components ::
import IconButton from "../common/IconButton";
import Logo from "../common/Logo";
import Drawer from "../common/Drawer";
import CartContent from "../cart/CartContent";
import FavouritesContent from "../favourites/FavouritesContent";
import SearchBar from "./SearchBar";
import LoginModal from "../auth/LoginModal";
import UserAfterLogin from "../user/UserAfterLogin";

// :: Redux Imports ::
import { useAppDispatch, useAppSelector } from "../../hook/reduxHooks";
import { initiateUser } from "../../redux/slices/userSlice";
import { initiateCart } from "../../redux/slices/cartSlice";

// :: Apollo Client Imports ::
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_USER, MUTATE_CART } from "../../graphql/resolvers";

// :: Custom Hooks and Utilites Imports ::
import useDebounce from "../../hook/useDebounce";
import { getItem } from "../../utils/localStorage";
import { CartItem } from "../../types";
import ThemeToggleButton from "../common/ThemeToggleButton";

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

	// State and toggler for login modal
	const [showLoginModal, setShowLoginModal] = useState(!id);
	const toggleLoginModal = user.token
		? () => {}
		: () => setShowLoginModal((e) => !e);

	// State and toggler for user about modal
	const [showUserAboutModal, setShowUserAboutModal] = useState(false);
	const toggleUserAboutModal = () => setShowUserAboutModal((e) => !e);

	// State and toggler for cart drawer
	const [showCartDrawer, setShowCartDrawer] = useState(false);
	const toggleCartDrawer = () =>
		user.token ? setShowCartDrawer((e) => !e) : toggleLoginModal();

	// State and toggler for favorites drawer
	const [showFavouritesDrawer, setShowFavouritesDrawer] = useState(false);
	const toggleFavouritesDrawer = () =>
		user.token ? setShowFavouritesDrawer((e) => !e) : toggleLoginModal();

	const cartPrice = useMemo(() => {
		const totalPaisa = cart.reduce(
			(acc, el) => (acc += el.price * el.count),
			0,
		);
		return (totalPaisa / 100).toFixed(2);
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
			className={`w-full h-[60px] fixed top-0 z-40 flex justify-between py-2 px-4 items-center lg:h-[80px] md:px-12 lg:px-4 2xl:px-44 bg-white  dark:bg-dark`}>
			<div onClick={navigateToHome}>
				<Logo />
			</div>
			<div className="hidden lg:flex">
				<SearchBar />
			</div>
			<nav className="flex items-center gap-5 xl:gap-8">
					<ThemeToggleButton/>
				<div className="relative">
					{/* <IconButton element={} /> */}
					<IconButton
						asButton
						onClick={user.about ? toggleUserAboutModal : toggleLoginModal}
						element={
							user.about ? (
								<img
									className="w-full h-full border rounded-full dark:border-dark"
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
				<div className="flex items-center gap-4 divide-x dark:divide-white/10">
					<IconButton
						asButton
						count={cart.length}
						element={
							cart.length > 0 ? <PiShoppingBag /> : <PiShoppingBagOpen />
						}
						onClick={toggleCartDrawer}
					/>

					<div className="items-start hidden h-full pl-4 md:grid text-lightblack dark:text-lightwhite">
						<p className="text-xs">Your Bag</p>
						<h2 className="font-medium">
							{cart.length > 0 ? `$${cartPrice}` : "is Empty"}
						</h2>
					</div>
				</div>
			</nav>
			{showCartDrawer && (
				<Drawer
					content={<CartContent {...{ cartPrice }} />}
					label={
						<div className="flex items-center gap-2">
							<IconButton
								asButton
								count={cart.length}
								element={<PiShoppingBagOpen />}
							/>
							<h1>Your Bag</h1>
						</div>
					}
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
