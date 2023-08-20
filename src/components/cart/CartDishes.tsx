import type { CartDish } from "../../types";
import CartItemCard from "./CartItemCard";

const CartDishes = ({ dishes }: { dishes: CartDish[] }) => {
	return (
		<div className="flex flex-col gap-3 pt-1">
			{dishes.map((dish) => (
				<CartItemCard key={dish.dishId + "cart-item-card"} {...dish} />
			))}
		</div>
	);
};

export default CartDishes;
