﻿import { useCallback, useEffect, useMemo, useState } from "react";
import { LuFilterX, LuSettings2 } from "react-icons/lu";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch } from "../../hook/reduxHooks";
import { sortAccording } from "../../redux/restaurantSlice";
import { SortType } from "../../types";
import { dropdownOptions } from "../../utils/data";
import Dropdown from "../common/Dropdown";
import FilterButton from "./Filters/FilterButton";
import FilterModal from "./Filters/FilterModal";
import ToggleButton from "./Filters/ToggleButton";

interface Props {
	atTop: boolean;
	total: number;
}

const FilterSortSection = ({ atTop, total }: Props) => {
	// :: Search Params ::
	const [searchParams, setSearchParams] = useSearchParams();
	const sortParams = (searchParams.get("sortby") as SortType) || "default";
	const foodTypeParams = searchParams.getAll("foodType");
	const cuisineParams = searchParams.getAll("cuisine");
	const deliveryParams = searchParams.getAll("delivery");
	const ratingParams = searchParams.getAll("rating");
	const expoloreParams = searchParams.getAll("explore");
	const costForTwoParams = searchParams.getAll("costForTwo");

	// :: state mangement ::
	const [selectBoxValue, setSelectBoxValue] = useState<SortType>(sortParams);
	const [foodTypeList, setFoodTypeList] = useState(foodTypeParams);
	const [cuisineList, setCuisineList] = useState(cuisineParams);
	const [deliveryInList, setDeliveryInList] = useState(deliveryParams);
	const [ratingList, setRatingList] = useState(ratingParams);
	const [costForTwoList, setCostForTwoList] = useState(costForTwoParams);
	const [expoloreList, setExpoloreList] = useState(expoloreParams);

	// :: Toggle Modal  ::
	const [showFilterModal, setShowFilterModal] = useState(false);
	const dispatch = useAppDispatch();

	const toggleFilterModal = useCallback(() => {
		setShowFilterModal((e) => !e);
	}, []);

	const handleClearFilters = useCallback(() => {
		// Clear all filter lists and reset the selectBoxValue to "default"
		setSelectBoxValue("default");
		setFoodTypeList([]);
		setCuisineList([]);
		setDeliveryInList([]);
		setRatingList([]);
		setCostForTwoList([]);
		setExpoloreList([]);
	}, []);

	const searchParamsCount = useMemo(
		() => Array.from(searchParams.keys()).length - 1,
		[searchParams],
	);

	useEffect(() => {
		// :: Managing Parmas view in url ::
		setSearchParams((prev) => {
			return {
				...prev,
				sortby: selectBoxValue,
				foodType: foodTypeList,
				cuisine: cuisineList,
				delivery: deliveryInList,
				rating: ratingList,
				costForTwo: costForTwoList,
				explore: expoloreList,
			};
		});
	}, [
		setSearchParams,
		selectBoxValue,
		foodTypeList,
		cuisineList,
		deliveryInList,
		ratingList,
		costForTwoList,
		expoloreList,
	]);

	useEffect(() => {
		// :: Sorting Logic written in redux slice ::
		if (total > 1) {
			// :: Dispatching the Action with Paylaod here for Sorting ::
			dispatch(sortAccording(selectBoxValue));
		}
	}, [selectBoxValue, dispatch, total]);

	return (
		<div
			className={`sticky z-10 flex w-full justify-between items-center gap-0 px-0 py-3 bg-white top-[50px]  lg:top-[70px] ${
				atTop && "shadow-[0_8px_6px_-8px_#000]"
			} transition`}>
			<div className={"flex flex-1 gap-3 items-center md:gap-4"}>
				{/*---:: Filter Modal Toggle Button ::---*/}
				<FilterButton
					onClick={toggleFilterModal}
					title="Filters"
					count={searchParamsCount}
					icon={<LuSettings2 />}
				/>

				{/*---:: Filters Modal with Modal Content ::---*/}
				{showFilterModal && (
					<FilterModal
						{...{
							toggleFilterModal,
							searchParamsCount,
							selectBoxValue,
							setSelectBoxValue,
							foodTypeList,
							setFoodTypeList,
							cuisineList,
							setCuisineList,
							deliveryInList,
							setDeliveryInList,
							ratingList,
							setRatingList,
							costForTwoList,
							setCostForTwoList,
							expoloreList,
							setExpoloreList,
						}}
					/>
				)}

				{/*---:: Some Filter Buttons ::---*/}
				<div className="hidden gap-4 md:flex">
					<ToggleButton
						title="Ratings 4.0+"
						defaultValue={ratingList.includes("Ratings 4.0+")}
						callback={setRatingList}
					/>

					<ToggleButton
						title="Pure Veg"
						defaultValue={foodTypeList.includes("Pure Veg")}
						callback={setFoodTypeList}
					/>
				</div>

				{/*---:: Cost For Two Buttons ::---*/}
				<div className="hidden gap-4 xl:flex">
					<ToggleButton
						title="Fast Delivery"
						defaultValue={deliveryInList.includes("Fast Delivery")}
						callback={setDeliveryInList}
					/>
					{["₹300 - ₹500", "Less than ₹300"].map((title, index) => (
						<ToggleButton
							key={title + index}
							title={title}
							defaultValue={costForTwoList.includes(title)}
							callback={setCostForTwoList}
						/>
					))}
				</div>

				{/*---:: Sorting Dropdown Menu ::---*/}
				<Dropdown
					options={dropdownOptions}
					value={selectBoxValue}
					setValue={setSelectBoxValue}
				/>
			</div>

			{searchParamsCount > 0 && (
				<button
					className="px-4 text-sm md:text-base ring-1 bg-black rounded-full ring-primary/10 py-2 text-secondary flex justify-center items-center hover:opacity-95 active:scale-95 gap-2"
					onClick={handleClearFilters}>
					<LuFilterX />
					<p className="hidden md:block">Clear</p>
				</button>
			)}
		</div>
	);
};

export default FilterSortSection;