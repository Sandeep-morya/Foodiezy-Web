import FilterHeading from "./FilterHeading";
import ListItem from "./ListItem";

const VegNonVeg = () => {
	return (
		<div>
			<FilterHeading title="Filter By" />
			<ListItem title="Pure Veg" />
			<ListItem title="Non-Veg" />
		</div>
	);
};

export default VegNonVeg;
