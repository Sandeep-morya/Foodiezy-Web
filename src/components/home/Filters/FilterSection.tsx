import { useState, useEffect } from "react";
import { LuSettings2 } from "react-icons/lu";
import FilterButton from "./FilterButton";
import { SortType } from "../../../types";
// import SelectBox from "../../common/SelectBox";
import Dropdown from "../../common/Dropdown";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../../hook/reduxHooks";
import { sortAccording } from "../../../redux/restaurantSlice";

interface Props {
	atTop: boolean;
	total: number;
}

const FilterSection = ({ atTop, total }: Props) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const initailValue = (searchParams.get("sortby") as SortType) || "default";
	const [selectBoxValue, setSelectBoxValue] = useState<SortType>(initailValue);
	const dispatch = useAppDispatch();

	const dropdownOptions: SortType[] = [
		"default",
		"title",
		"rating",
		"h2l",
		"l2h",
		"delivery",
	];
	console.log({ searchParams });

	useEffect(() => {
		setSearchParams({ sortby: selectBoxValue });
	}, [selectBoxValue, setSearchParams]);

	useEffect(() => {
		if (total > 1) {
			dispatch(sortAccording(selectBoxValue));
		}
	}, [selectBoxValue, dispatch, total]);

	return (
		<div
			className={`sticky z-40 flex w-full flex-wrap justify-start items-center gap-3 px-0 py-4 bg-white top-[50px] md:gap-4 lg:top-[75px] ${
				atTop && "shadow-[0_8px_6px_-8px_#000]"
			} transition`}>
			<FilterButton title="Filters" count={1} icon={<LuSettings2 />} />

			<div className="hidden gap-4 md:flex">
				<FilterButton title="Ratings 4.0+" />
				<FilterButton title="Fast Delivery" active />
				<FilterButton title="Pure Veg" />
			</div>

			<div className="hidden gap-4 xl:flex">
				<FilterButton title="Rs. 300-Rs. 600" />
				<FilterButton title="Less than Rs. 300" />
			</div>
			<Dropdown
				options={dropdownOptions}
				value={selectBoxValue}
				setValue={setSelectBoxValue}
			/>
		</div>
	);
};

export default FilterSection;
