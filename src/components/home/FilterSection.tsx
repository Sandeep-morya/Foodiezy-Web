// import React from "react";
import { LuSettings2 } from "react-icons/lu";
import FilterButton from "./FilterButton";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface Props {
	atTop: boolean;
}

const FilterSection = ({ atTop }: Props) => {
	return (
		<div
			className={`sticky z-40 flex flex-wrap justify-start w-full gap-3 px-0 py-4 bg-white top-[50px] md:gap-4 lg:top-[75px] ${
				atTop && "shadow-[0_8px_6px_-8px_#000]"
			}`}>
			<FilterButton title="Filters" count={1} icon={<LuSettings2 />} />
			<FilterButton
				title="Sort By"
				icon={<MdOutlineKeyboardArrowDown size={20} />}
			/>
			<FilterButton title="Ratings 4.0+" />
			<div className="hidden gap-4 md:flex">
				<FilterButton title="Fast Delivery" active />
				<FilterButton title="Pure Veg" />
			</div>

			<div className="hidden gap-4 xl:flex">
				<FilterButton title="Rs. 300-Rs. 600" />
				<FilterButton title="Less than Rs. 300" />
			</div>
		</div>
	);
};

export default FilterSection;
