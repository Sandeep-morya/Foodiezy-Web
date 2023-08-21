import { useCallback } from "react";

import { useAppDispatch } from "../../hook/reduxHooks";
import { removeFromCart } from "../../redux/cartSlice";
import type { CartDish } from "../../types";
import { LOW_IMG_LINK } from "../../utils/links";

const CartItemCard = (card: CartDish) => {
	const dispatch = useAppDispatch();
	const removeItem = useCallback(() => {
		dispatch(removeFromCart(card.dishId));
	}, [dispatch, card.dishId]);
	return (
		<div className="w-full h-[120px] flex justify-between gap-2 shadow-md">
			<div className="h-full flex-1 flex items-center gap-3 p-2">
				<div className="h-full w-[90px] min-w-[90px] rounded overflow-hidden">
					<img
						className="w-full h-full object-cover"
						src={LOW_IMG_LINK + card.imageId}
						alt=""
					/>
				</div>
				<div className="flex h-full flex-col justify-between">
					<div>
						<h4 className="text-sm font-medium">
							{card.dishName.substring(0, 48)}
						</h4>
						<p className="text-xs text-black/50 font-medium">{card.category}</p>
					</div>
					<p className="text-sm">
						<span className="text-black/50 font-medium">Qty: </span>{" "}
						{card.count}
					</p>
				</div>
			</div>
			<div className="w-[20%] h-full flex flex-col justify-between items-center p-2">
				<h4 className="font-medium">
					₹{((card.price / 100) * card.count).toFixed(2)}
				</h4>
				<button onClick={removeItem} className="text-red-500 text-sm">
					Remove
				</button>
			</div>
		</div>
	);
};

export default CartItemCard;
