import { Dispatch, SetStateAction, useState } from "react";
import { twMerge } from "tailwind-merge";
import { LuSettings2 } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { filterTypes } from "../../../utils/data";
import VegNonVeg from "./VegNonVeg";
import Cuisines from "./Cuisines";
import Delivery from "./Delivery";
import Rating from "./Rating";
import CostForTwo from "./CostForTwo";
import Explore from "./Explore";
import Sort from "./Sort";
import { SortType } from "../../../types";
interface Props {
	toggleFilterModal: () => void;
	selectBoxValue: SortType;
	setSelectBoxValue: Dispatch<SetStateAction<SortType>>;
}

const FilterModal = ({
	toggleFilterModal,
	selectBoxValue,
	setSelectBoxValue,
}: Props) => {
	const [filterTitleIndex, setFilterTitleIndex] = useState(0);

	return (
		<div className="fixed w-screen h-screen top-0 left-0 z-[500] bg-black/50 flex justify-center items-end md:items-center">
			<div className="w-[100%] h-auto bg-white rounded-xl divide-y md:w-[70%] lg:w-[60%] 2xl:w-[50%]">
				<div className="flex justify-between items-center p-3">
					<div className="flex items-center  gap-2 text-lg font-bold tracking-wide md:text-xl">
						<LuSettings2 />
						<h1>Filters</h1>
					</div>
					<div
						onClick={toggleFilterModal}
						className="p-1 bg-white text-xl transition-all  rounded-full hover:bg-primary/25 lg:text-2xl">
						<MdClose />
					</div>
				</div>
				<div className="flex-1 h-full flex justify-between">
					<div className="w-[45%] relative h-full flex flex-col md:w-[40%] xl:w-[30%] bg-black/5">
						<div className="absolute top-0 z-10 left-0 w-2 h-full">
							<div
								style={{ transform: `translateY(${filterTitleIndex * 100}%)` }}
								className={`w-full h-[calc(100%/7)] bg-primary rounded-tr-xl rounded-br-xl transition duration-500 ease-out`}
							/>
						</div>
						{filterTypes.map((x, index) => (
							<h2
								key={x + index}
								onClick={() => setFilterTitleIndex(index)}
								className={twMerge(
									"text-md font-semibold px-5 py-4 2xl:text-lg",
									index === filterTitleIndex ? "bg-none" : "bg-white",
									index === filterTitleIndex + 1 && "rounded-tr-xl",
									index === filterTitleIndex - 1 && "rounded-br-xl",
								)}>
								{x}
							</h2>
						))}
					</div>
					<div className="flex-1 py-2 pl-4 bg-black/5 h-[450px] overflow-y-scroll vanish-scroll-bar 2xl:h-[480px]">
						{filterTitleIndex === 0 && <VegNonVeg />}
						{filterTitleIndex === 1 && <Cuisines />}
						{filterTitleIndex === 2 && <Delivery />}
						{filterTitleIndex === 3 && <Rating />}
						{filterTitleIndex === 4 && <CostForTwo />}
						{filterTitleIndex === 5 && <Explore />}
						{filterTitleIndex === 6 && (
							<Sort {...{ selectBoxValue, setSelectBoxValue }} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterModal;
