import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { useAppSelector } from "../../../hook/reduxHooks";
import FilterHeading from "./FilterHeading";
import ListItem from "./ListItem";

interface Props {
	cuisineList: string[];
	setCuisineList: Dispatch<SetStateAction<string[]>>;
}

const Cuisines = ({ cuisineList, setCuisineList }: Props) => {
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
				<ListItem
					key={index}
					title={x}
					callback={setCuisineList}
					defaultValue={cuisineList.includes(x)}
				/>
			))}
		</div>
	);
};

export default Cuisines;
