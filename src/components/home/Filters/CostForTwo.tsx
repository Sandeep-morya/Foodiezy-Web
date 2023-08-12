import FilterHeading from "./FilterHeading";
import ListItem from "./ListItem";

const CostForTwo = () => {
	return (
		<div>
			<FilterHeading title="Filter By" />
			<ListItem title="₹300 - ₹400" />
			<ListItem title="Greater than ₹400" />
			<ListItem title="Less than ₹300" />
		</div>
	);
};

export default CostForTwo;
