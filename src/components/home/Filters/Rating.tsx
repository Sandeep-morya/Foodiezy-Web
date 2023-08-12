import FilterHeading from "./FilterHeading";
import ListItem from "./ListItem";

const Rating = () => {
	return (
		<div>
			<FilterHeading title="Filter By" />
			<ListItem title="Ratings 4.5+" />
			<ListItem title="Ratings 4.0+" />
			<ListItem title="Ratings 3.5+" />
		</div>
	);
};

export default Rating;
