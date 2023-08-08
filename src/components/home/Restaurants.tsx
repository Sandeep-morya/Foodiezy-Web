import { useState } from "react";
import type { Restaurant, Restaurants } from "../../types";
import RestaurantCard from "./RestaurantCard";

const Restaurants = ({ data }: { data: Restaurants }) => {
	console.log({ totalRestaurants: data.totalCount });
	const [restaurantList /* setRestaurantList */] = useState<Restaurant[]>(
		data.documents,
	);
	console.log(restaurantList);
	return (
		<div className="flex flex-col gap-4 px-2 md:px-4">
			<h1 className="text-lg font-semibold tracking-wide md:text-xl xl:text-2xl">
				Restaurants near you {`(${data.totalCount})`}
			</h1>
			{/*---:: Restaurant Cards ::---*/}
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-8 2xl:grid-cols-5">
				{restaurantList.map((restaurant) => (
					<RestaurantCard key={restaurant._id} {...restaurant} />
				))}
			</div>
		</div>
	);
};

export default Restaurants;
