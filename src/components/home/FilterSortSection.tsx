// :: Dependencies Imports ::
import {
	Dispatch,
	SetStateAction,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from "react";
import { LuSettings2 } from "react-icons/lu";

// :: Types Imports ::
import type { SortType } from "../../types";
import type { SetURLSearchParams } from "react-router-dom";

// :: Utilities and Custom Hooks Import
import { dropdownOptions } from "../../utils/constants";
import { cleanParams } from "../../utils/sorting";
import useThrottle from "../../hook/useThrottle";

// :: Local Imports ::
import Dropdown from "../common/Dropdown";
import FilterButton from "./Filters/FilterButton";
import FilterModal from "./Filters/FilterModal";
import ToggleButton from "./Filters/ToggleButton";

interface Props {
	atTop: boolean;
	total: number;
	modified: boolean;
	searchParams: URLSearchParams;
	setSearchParams: SetURLSearchParams;
	setQueryParams: Dispatch<SetStateAction<string>>;
}

const FilterSortSection = ({
	atTop,
	modified,
	searchParams,
	setSearchParams,
	setQueryParams,
}: Props) => {
	// :: Search Params ::

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
	//const dispatch = useAppDispatch();
	const throttle = useThrottle();

	const toggleFilterModal = useCallback(() => {
		setShowFilterModal((e) => !e);
	}, []);

	// Clear all filter lists and reset the selectBoxValue to "default"
	const handleClearFilters = useCallback(() => {
		setQueryParams("");
		setSelectBoxValue("default");
		setFoodTypeList([]);
		setCuisineList([]);
		setDeliveryInList([]);
		setRatingList([]);
		setCostForTwoList([]);
		setExpoloreList([]);
	}, [setQueryParams]);

	const handleApplyFilter = useCallback(() => {
		throttle(() => {
			setQueryParams(searchParams.toString());
		}, 1000);
	}, [searchParams, setQueryParams, throttle]);

	// :: For Counting number of filters applied including "sort" ::
	const searchParamsCount = useMemo(
		() => Array.from(searchParams.keys()).length,
		[searchParams],
	);

	// :: Handling Params in Url ::

	useEffect(() => {
		setSearchParams((prev) => {
			return {
				...prev,
				...cleanParams({
					sortby: selectBoxValue === "default" ? null : selectBoxValue,
					foodType: foodTypeList,
					cuisine: cuisineList,
					delivery: deliveryInList,
					rating: ratingList,
					costForTwo: costForTwoList,
					explore: expoloreList,
				}),
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

	return (
		<section
			aria-aria-labelledby="filterationa and sorting section"
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
							handleApplyFilter,
							handleClearFilters,
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
				<nav className="hidden gap-4 xl:flex">
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
				</nav>

				{/*---:: Sorting Dropdown Menu ::---*/}
				<Dropdown
					options={dropdownOptions}
					value={selectBoxValue}
					setValue={setSelectBoxValue}
				/>
			</div>

			{searchParamsCount > 0 && (
				<div className="hidden gap-4 lg:flex">
					{/*---:: Clear filter Button ::---*/}
					<button
						onClick={handleClearFilters}
						className="px-4 py-2 text-sm font-medium text-lightblack active:scale-95 hover:bg-secondary">
						{"Clear Filter"}
					</button>

					{/*---:: Apply Filter Button ::---*/}

					<button
						onClick={handleApplyFilter}
						className="px-4 py-2 text-sm font-medium text-white rounded-full active:scale-95 bg-primary">
						{modified ? "Applied" : "Apply"}
					</button>
				</div>
			)}
		</section>
	);
};

export default FilterSortSection;
