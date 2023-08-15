import {
	Dispatch,
	SetStateAction,
	useCallback,
	useEffect,
	useState,
} from "react";
import { LuSettings2 } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { twMerge } from "tailwind-merge";

import { SortType } from "../../../types";
import {
	costArray,
	deliveryArray,
	exploreArray,
	filterTypes,
	foodTypeArray,
	ratingArray,
} from "../../../utils/data";
import Cuisines from "./Cuisines";
import Filter from "./Filter";
import Sort from "./Sort";

interface Props {
	handleApplyFilter: () => void;
	toggleFilterModal: () => void;
	handleClearFilters: () => void;
	searchParamsCount: number;
	selectBoxValue: SortType;
	setSelectBoxValue: Dispatch<SetStateAction<SortType>>;
	foodTypeList: string[];
	setFoodTypeList: Dispatch<SetStateAction<string[]>>;
	cuisineList: string[];
	setCuisineList: Dispatch<SetStateAction<string[]>>;
	deliveryInList: string[];
	setDeliveryInList: Dispatch<SetStateAction<string[]>>;
	ratingList: string[];
	setRatingList: Dispatch<SetStateAction<string[]>>;
	costForTwoList: string[];
	setCostForTwoList: Dispatch<SetStateAction<string[]>>;
	expoloreList: string[];
	setExpoloreList: Dispatch<SetStateAction<string[]>>;
}

const FilterModal = ({
	handleApplyFilter,
	handleClearFilters,
	searchParamsCount,
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
}: Props) => {
	const [filterTitleIndex, setFilterTitleIndex] = useState(0);
	const [inView, setInView] = useState(false);

	const handleClose = useCallback(() => {
		setInView(false);
		setTimeout(() => {
			toggleFilterModal();
		}, 300);
	}, [toggleFilterModal]);

	useEffect(() => {
		setInView(true);
	}, []);

	return (
		// :: Outer Overlay ::
		<div className="fixed top-0 left-0 z-10 flex items-end justify-center w-screen h-screen bg-white/50 backdrop-blur-sm 2xl:md:items-center">
			{/*---:: Modal ::---*/}
			<div
				className={twMerge(
					`w-[100%] translate-y-[100%] h-auto bg-secondary shadow-[0_0_10px_#0007] rounded-xl divide-y  lg:w-[60%] lg:scale-75 xl:scale-90 2xl:scale-100 2xl:w-[50%] transition duration-300 scale-100 `,
					inView && "translate-x-0 translate-y-0",
				)}>
				{/*---:: Heading Section ::---*/}
				<div className="flex items-center justify-between p-3">
					{/*---:: Heading ::---*/}
					<div className="flex items-center gap-2 text-lg font-bold tracking-wide md:text-xl">
						<LuSettings2 />
						<h1>Filters</h1>
					</div>
					{/*---:: Close Button ::---*/}
					<div
						onClick={handleClose}
						className="p-1 text-xl transition-all rounded-full text-secondary bg-primary hover:opacity-75 lg:text-2xl active:scale-90">
						<MdClose />
					</div>
				</div>
				{/*---:: Main Section ::---*/}
				<div className="flex justify-between flex-1 h-full">
					{/*---:: Left Section ::---*/}
					<div className="w-[45%] relative h-full flex flex-col md:w-[40%] xl:w-[30%] bg-black/5">
						{/*---:: Left side Auto Scrollbar ::---*/}
						<div className="absolute top-0 left-0 z-10 w-2 h-full">
							<div
								style={{ transform: `translateY(${filterTitleIndex * 100}%)` }}
								className={`w-full h-[calc(100%/7)] bg-primary rounded-tr-xl rounded-br-xl transition duration-500 ease-out`}
							/>
						</div>
						{/*---:: All types of filer Heading ::---*/}
						{filterTypes.map((x, index) => (
							<h2
								key={x + index}
								onClick={() => setFilterTitleIndex(index)}
								className={twMerge(
									"text-sm font-semibold px-5 py-4 2xl:text-lg",
									index === filterTitleIndex ? "bg-none" : "bg-white",
									index === filterTitleIndex + 1 && "rounded-tr-xl",
									index === filterTitleIndex - 1 && "rounded-br-xl",
								)}>
								{x}
							</h2>
						))}
					</div>
					{/*---:: Right Section ::---*/}
					<div className="flex-1 py-2 pl-4 bg-black/5 h-[420px] overflow-y-scroll vanish-scroll-bar 2xl:h-[480px]">
						{/*---:: Food-Type ::---*/}
						{filterTitleIndex === 0 && (
							<Filter
								key={"Food-Type"}
								heading="Filter By"
								array={foodTypeArray}
								value={foodTypeList}
								setValue={setFoodTypeList}
							/>
						)}

						{/*---:: Cuisines ::---*/}
						{filterTitleIndex === 1 && (
							<Cuisines {...{ cuisineList, setCuisineList }} />
						)}

						{/*---:: Delivery ::---*/}
						{filterTitleIndex === 2 && (
							<Filter
								key={"Delivery"}
								heading="Filter By"
								array={deliveryArray}
								value={deliveryInList}
								setValue={setDeliveryInList}
							/>
						)}

						{/*---:: Rating ::---*/}
						{filterTitleIndex === 3 && (
							<Filter
								key={"Rating"}
								heading="Filter By"
								array={ratingArray}
								value={ratingList}
								setValue={setRatingList}
							/>
						)}

						{/*---:: Cost For Two ::---*/}
						{filterTitleIndex === 4 && (
							<Filter
								key={"CostForTwo"}
								heading="Filter By"
								array={costArray}
								value={costForTwoList}
								setValue={setCostForTwoList}
							/>
						)}

						{/*---:: Explore ::---*/}
						{filterTitleIndex === 5 && (
							<Filter
								key={"Explore"}
								heading="Filter By"
								array={exploreArray}
								value={expoloreList}
								setValue={setExpoloreList}
							/>
						)}

						{/*---:: Sort ::---*/}
						{filterTitleIndex === 6 && (
							<Sort {...{ selectBoxValue, setSelectBoxValue }} />
						)}
					</div>
				</div>

				{/*---:: Footer Section ::---*/}
				{searchParamsCount > 0 && (
					<div className="flex items-center justify-end px-2 h-[60px]">
						<div className="flex gap-4">
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
								{searchParamsCount > 1 ? "Apply Filters" : "Apply Filter"}
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default FilterModal;
