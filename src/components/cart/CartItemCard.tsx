import { useCallback } from "react";

import { useAppDispatch } from "../../hook/reduxHooks";
import { removeFromCart } from "../../redux/slices/cartSlice";
import type { CartDish } from "../../types";
import { LOW_IMG_LINK } from "../../utils/links";

const CartItemCard = (card: CartDish) => {
	const dispatch = useAppDispatch();
	const removeItem = useCallback(() => {
		dispatch(removeFromCart(card.dishId));
	}, [dispatch, card.dishId]);
	return (
		<div className="w-full h-[120px] flex justify-between gap-2 rounded-lg hover:bg-black/5 dark:bg-moredark dark:text-lightwhite">
			<div className="flex items-center flex-1 h-full gap-3 p-2">
				<div className="h-full w-[90px] min-w-[90px] rounded overflow-hidden">
					<img
						className="object-cover w-full h-full"
						src={LOW_IMG_LINK + card.imageId}
						alt=""
					/>
				</div>
				<div className="flex flex-col justify-between h-full">
					<div>
						<h4 className="text-sm font-medium">
							{card.dishName.substring(0, 48)}
						</h4>
						<p className="text-xs font-medium text-black/50 dark:text-white/20">{card.category}</p>
					</div>
					<p className="text-sm dark:text-primary">
						<span className="font-medium text-black/50 dark:text-lightwhite">Qty: </span>
						{card.count}
					</p>
				</div>
			</div>
			<div className="w-[20%] h-full flex flex-col justify-between items-center p-2">
				<h4 className="font-medium">
					${((card.price / 100) * card.count).toFixed(2)}
				</h4>
				<button onClick={removeItem} className="text-sm text-red-500">
					Remove
				</button>
			</div>
		</div>
	);
};

export default CartItemCard;
