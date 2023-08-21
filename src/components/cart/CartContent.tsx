// import React from "react";

import { MdShoppingCartCheckout, MdTableRestaurant } from "react-icons/md";
import { CartRestaurant } from "../../types";
import CartDishes from "./CartDishes";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hook/reduxHooks";

interface Props {
	cartPrice: string;
}

const CartContent = ({ cartPrice }: Props) => {
	const cart = useAppSelector((store) => store.cart);
	const [data, setData] = useState<CartRestaurant[]>([]);

	useEffect(() => {
		const restaurantMap = new Map<string, CartRestaurant>();
		cart.forEach((dish) => {
			if (!restaurantMap.has(dish.restaurantId)) {
				restaurantMap.set(dish.restaurantId, {
					restaurantId: dish.restaurantId,
					restaurantName: dish.restaurantName,
					dishes: [],
				});
			}

			const restaurant = restaurantMap.get(dish.restaurantId);
			restaurant!.dishes.push({
				dishId: dish.dishId,
				category: dish.category,
				dishName: dish.dishName,
				imageId: dish.imageId,
				count: dish.count,
				price: dish.price,
			});
		});
		setData([...restaurantMap.values()]);
	}, [cart]);

	return cart.length > 0 ? (
		<div className="w-full h-full relative">
			<div className="w-full h-[calc(100%-100px)] overflow-y-scroll vanish-scroll-bar">
				{data.map(({ restaurantId, restaurantName, dishes }) => (
					<div
						className="my-4 p-2 divide-y"
						key={restaurantId + restaurantName}>
						<div className="flex text-lg items-center gap-3 my-2">
							<MdTableRestaurant />
							<h1 className="font-medium">
								{restaurantName} {`(${dishes.length})`}
							</h1>
						</div>

						<CartDishes {...{ dishes }} />
					</div>
				))}
			</div>

			<div className="w-full h-[60px] p-2 bg-white shadow-lg bg-teal absolute bottom-[50px] left-0 flex gap-3  items-center">
				<p className="text-xs font-medium flex-1">
					SubTotal: <span className="text-2xl"> ₹{cartPrice}</span>
				</p>
				<button className="flex-1 h-full bg-black text-white flex items-center justify-center gap-3 rounded active:scale-95">
					<MdShoppingCartCheckout />
					Checkout
				</button>
			</div>
		</div>
	) : (
		<div className="w-full h-full flex justify-center items-center">
			<div className="flex scale-75 flex-col items-center -mt-16">
				<img src="/empty-bag.webp" alt="" />
				<h1 className="text-4xl font-semibold text-[#1B60E6] xl:scale-90 2xl:scale-100">
					Empty Bag
				</h1>
			</div>
		</div>
	);
};

export default CartContent;
