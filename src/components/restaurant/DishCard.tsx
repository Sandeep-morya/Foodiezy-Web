import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
	PiCheckSquareOffsetDuotone,
	PiHeartStraightDuotone,
	PiShoppingBag,
} from "react-icons/pi";

// :: Type Imports ::
import type { CartItem, Info } from "../../types";

// :: Redux Imports ::
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";
// :: Custom Hooks and Utilites Imports ::
import { useAppDispatch, useAppSelector } from "../../hook/reduxHooks";
import { MD_IMG_LINK } from "../../utils/links";

// :: Custom Components ::
import Pill from "../common/Pill";
import Counter from "./Counter";
import NotificationCount from "../common/NotificationCount";

interface Card {
	restaurantId: string;
	restaurantName: string;
	info: Info;
}
const DishCard = ({ info, restaurantId, restaurantName }: Card) => {
	const dispatch = useAppDispatch();
	const src = info.imageId ? MD_IMG_LINK + info.imageId : "/sample.png";
	const cart = useAppSelector((store) => store.cart);
	const user = useAppSelector((store) => store.user);
	const navigate = useNavigate();

	const cartItem = useMemo(() => {
		return cart.find((item) => item.dishId === info.id);
	}, [info.id, cart]);

	const [count, setCount] = useState(cartItem?.count || 0);

	const price = useMemo(() => {
		const cost = info.price || 10000;
		let value = cost / 100;
		value = count === 0 ? value * (count + 1) : value * count;
		return value.toFixed(2);
	}, [count, info.price]);

	useEffect(() => {
		const cartItem: CartItem = {
			dishId: info.id,
			dishName: info.name,
			category: info.category,
			imageId: info.imageId,
			price: info.price || 10000,
			count,
			restaurantId,
			restaurantName,
		};

		dispatch(count === 0 ? removeFromCart(info.id) : addToCart(cartItem));
	}, [count, dispatch, restaurantId, restaurantName, info]);
	useEffect(() => {
		if (cartItem) {
			setCount(cartItem.count);
		} else {
			setCount(0);
		}
	}, [cartItem]);
	return (
		<div className="relative dish-card w-full h-[240px] border rounded-lg overflow-hidden group dark:border-moredark">
			<div>
				<div className="absolute inset-0 flex items-center justify-center object-cover -z-10 bg-black/20">
					<img
						className="grayscale h-[30%] aspect-square object-contain"
						src="/only-smile.png"
						alt="logo-skeleton-image"
					/>
				</div>
			</div>
			<img
				loading="lazy"
				className="object-cover w-full h-full transition-all duration-300 scale-100 group-hover:scale-125 dark:opacity-90"
				src={src}
				alt=""
			/>
			<div className="dish-card-overlay absolute bottom-0  left-0 w-full h-[90px] p-3 duration-300 flex flex-col justify-center items-start group-hover:h-full group-hover:justify-start text-secondary transition-all overflow-y-scroll vanish-scroll-bar">
				<div className="flex flex-col items-start gap-1">
					<Pill
						title={info.isVeg ? "Pure Veg" : "Non-Veg"}
						color={info.isVeg ? "bg-teal-500" : "bg-red-500"}
					/>
					<h3 className="text-lg font-medium tracking-wider ">
						{/* Pending adding ... at last */}
						{info.name.substring(0, 35)}
					</h3>
				</div>

				<div className=" w-full mt-0.5 flex-col drop-shadow-md hidden group-hover:flex flex-1">
					{/* <h3 className="font-medium underline">Description</h3> */}
					<h3 className="text-xl font-bold">${price}</h3>
					<p className="py-1 text-sm tracking-wider">{info.description}</p>

					<div className="flex items-end flex-1 w-full pt-2">
						<div className="w-full h-[40px] flex items-center gap-2 text-lightblack">
							{count === 0 ? (
								<button
									onClick={user.token ? () => setCount(1) : () => navigate("/")}
									className="flex-1 text-center rounded  font-medium  bg-white/30 text-secondary flex h-[35px] items-center justify-center gap-3 active:scale-95">
									<div className="text-xl">
										<PiShoppingBag />
									</div>
									Add to bag
								</button>
							) : (
								<Counter {...{ count, setCount }} />
							)}
							<div className="w-[35px] aspect-square flex justify-center items-center text-3xl rounded-md text-amber-500">
								<PiHeartStraightDuotone />
							</div>
						</div>
					</div>
				</div>
			</div>

			{count > 0 && (
				<div className="absolute text-3xl text-white top-2 right-2 char-shadow">
					<PiCheckSquareOffsetDuotone />
					<div className="absolute top-1 right-2.5">
						<NotificationCount count={count} />
					</div>
				</div>
			)}
		</div>
	);
};

export default DishCard;
