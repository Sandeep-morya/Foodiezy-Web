import type { CartDish } from "../../types";
import CartItemCard from "./CartItemCard";
import { v4 as uuid } from "uuid";

const CartDishes = ({ dishes }: { dishes: CartDish[] }) => {
	return (
		<div className="flex flex-col gap-3 pt-1">
			{dishes.map((dish) => (
				<CartItemCard key={uuid()} {...dish} />
			))}
		</div>
	);
};

export default CartDishes;
