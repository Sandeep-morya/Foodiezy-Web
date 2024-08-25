import { useEffect, useState } from "react";
import { MdShoppingCartCheckout, MdTableRestaurant } from "react-icons/md";
import type { CartRestaurant } from "../../types";
import { useAppSelector } from "../../hook/reduxHooks";
import CartDishes from "./CartDishes";

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
		<div className="relative w-full h-full">
			<section className="w-full h-[calc(100%-100px)] overflow-y-scroll  small-scroll-bar">
				{data.map(({ restaurantId, restaurantName, dishes }) => (
					<div
						className="p-2 my-4 divide-y divide-white/10"
						key={restaurantId + restaurantName}>
						<div className="flex items-center gap-3 my-2 text-lg dark:text-lightwhite" >
							<MdTableRestaurant />
							<h1 className="font-medium">
								{restaurantName} {`(${dishes.length})`}
							</h1>
						</div>

						<CartDishes {...{ dishes }} />
					</div>
				))}
			</section>

			<section className="w-full h-[60px] p-2 bg-white shadow-lg bg-teal absolute bottom-[50px] left-0 flex gap-3  items-center dark:bg-dark">
				<p className="flex-1 text-xs font-medium dark:text-lightwhite">
					SubTotal: <span className="text-2xl"> ${cartPrice}</span>
				</p>
				<button className="flex items-center justify-center flex-1 h-full gap-3 text-white bg-black rounded active:scale-95 dark:bg-primary dark:text-black">
					<MdShoppingCartCheckout />
					Checkout
				</button>
			</section>
		</div>
	) : (
		<div className="flex items-center justify-center w-full h-full">
			<div className="flex flex-col items-center -mt-16 scale-75">
				<img src="/empty-bag.webp" alt="" />
				<h1 className="text-4xl font-semibold text-[#1B60E6] xl:scale-90 2xl:scale-100">
					Empty Bag
				</h1>
			</div>
		</div>
	);
};

export default CartContent;
