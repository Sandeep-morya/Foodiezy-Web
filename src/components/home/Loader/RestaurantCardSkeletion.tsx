// import { MdRestaurant } from "react-icons/md";

const TextWithIcon = () => {
	return (
		<div className="flex items-center gap-2">
			<div className="w-[15px] aspect-square  bg-black/20 rounded-full" />
			<div className="w-[60px] h-[10px] bg-black/20 rounded-full" />
		</div>
	);
};

const RestaurantCardSkeletion = () => {
	return (
		<div className="flex flex-row gap-0 overflow-hidden rounded-lg group ring-1 ring-gray-200 md:flex-col">
			<div className="w-[45%] aspect-[3/4] flex justify-center items-center md:w-full md:aspect-[3/2] bg-black/20">
				<img
					className="grayscale h-[30%] aspect-square object-contain"
					src="/only-smile.png"
					alt=""
				/>
				{/* <div className="text-6xl text-black/20">
					<MdRestaurant />
				</div> */}
			</div>

			<div className="flex flex-col flex-1 gap-2 p-3 bg-white md:p-2 xl:gap-3 xl:p-3 xl:pt-2">
				<div className="flex justify-start gap-2 md:hidden">
					<div className={"bg-black/30 w-[30px] h-[20px] rounded"} />
					<div className={"bg-black/30 w-[70px] h-[20px] rounded"} />
				</div>

				<div className="mt-2 w-[130px] h-[20px] bg-black/20 rounded-full md:w-[200px] xl:h-[25px]" />
				<div className="flex items-center justify-between">
					<div className="w-[85px] h-[10px] bg-black/20 rounded-full" />
					<div className="hidden md:block">
						<div className="w-[60px] h-[10px] bg-black/20 rounded-full" />
					</div>
				</div>
				<div className="flex flex-col gap-2 mt-2 md:flex-row md:justify-between">
					<div className="block md:hidden">
						<TextWithIcon />
					</div>
					<TextWithIcon />
					<TextWithIcon />
					<TextWithIcon />
				</div>
			</div>
		</div>
	);
};

export default RestaurantCardSkeletion;
