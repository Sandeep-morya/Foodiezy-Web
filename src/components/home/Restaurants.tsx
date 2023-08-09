import { useState } from "react";
import type { Restaurant, Restaurants } from "../../types";
import RestaurantCard from "./RestaurantCard";
import FilterSection from "./FilterSection";
import { useInView } from "react-intersection-observer";

const Restaurants = ({ data }: { data: Restaurants }) => {
	console.log({ totalRestaurants: data.totalCount });
	const { inView, ref } = useInView();
	const [restaurantList /* setRestaurantList */] = useState<Restaurant[]>(
		data.documents,
	);
	console.log(restaurantList);
	return (
		<div className="flex flex-col px-2 gap-y-2 md:px-4">
			<h1
				ref={ref}
				className="text-lg font-semibold tracking-wide md:text-xl xl:text-2xl">
				Restaurants near you {`(${data.totalCount})`}
			</h1>
			<FilterSection atTop={!inView} />
			{/*---:: Restaurant Cards ::---*/}
			<div className="grid grid-cols-1 gap-6 px-1 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 2xl:gap-8">
				{restaurantList.map((restaurant) => (
					<RestaurantCard key={restaurant._id} {...restaurant} />
				))}
			</div>
		</div>
	);
};

export default Restaurants;
