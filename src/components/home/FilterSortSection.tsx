import { useState, useEffect, useCallback, useMemo } from "react";
import { LuSettings2 } from "react-icons/lu";
import FilterButton from "./Filters/FilterButton";
import { SortType } from "../../types";
import Dropdown from "../common/Dropdown";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../hook/reduxHooks";
import { sortAccording } from "../../redux/restaurantSlice";
import { dropdownOptions } from "../../utils/data";
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

	const searchParamsCount = useMemo(() => {
		const count = Array.from(searchParams.keys()).length;
		return selectBoxValue === "default" ? count - 1 : count;
	}, [selectBoxValue, searchParams]);

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
			className={`sticky z-20 flex w-full flex-wrap justify-start items-center gap-3 px-0 py-4 bg-white top-[50px] md:gap-4 lg:top-[75px] ${
				atTop && "shadow-[0_8px_6px_-8px_#000]"
			} transition`}>
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
					title="Fast Delivery"
					defaultValue={deliveryInList.includes("Fast Delivery")}
					callback={setDeliveryInList}
				/>
				<ToggleButton
					title="Pure Veg"
					defaultValue={foodTypeList.includes("Pure Veg")}
					callback={setFoodTypeList}
				/>
			</div>

			{/*---:: Cost For Two Buttons ::---*/}
			<div className="hidden gap-4 xl:flex">
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
	);
};

export default FilterSortSection;
