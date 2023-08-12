import { useAppSelector } from "../../../hook/reduxHooks";
import { useState, useEffect } from "react";
import FilterHeading from "./FilterHeading";
import ListItem from "./ListItem";

const Cuisines = () => {
	const { restaurants } = useAppSelector((store) => store.restaurants);
	const [cuisineSet, setCuisineSet] = useState(new Set<string>());

	useEffect(() => {
		const uniqueCuisines = new Set<string>();
		for (const restaurant of restaurants) {
			for (const cuisine of restaurant.cuisines) {
				uniqueCuisines.add(cuisine);
			}
		}
		setCuisineSet(uniqueCuisines);
	}, [restaurants]);

	const cuisineArray = Array.from(cuisineSet);

	return (
		<div className="mb-6">
			<FilterHeading title="Filter By cuisine" />

			{cuisineArray.map((x, index) => (
				<ListItem key={x + index + "list-item"} title={x} />
			))}
		</div>
	);
};

export default Cuisines;
