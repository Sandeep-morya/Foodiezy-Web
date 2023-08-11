import RestaurantCardSkeletion from "./RestaurantCardSkeletion";
const PillSkeleton = () => {
	return <div className={"w-[90px] h-[35px] rounded-full bg-black/20"} />;
};
const RestaurantsLoader = () => {
	return (
		<div className="flex flex-col px-2 gap-y-2 md:px-4 animate-pulse">
			<div className="w-[250px] mb-3 h-[20px] bg-black/20 rounded-md md:w-[375px] xl:h-[25px]" />
			<div
				className={`sticky z-40 flex justify-start w-full gap-3 px-0 py-4 bg-white top-[50px] md:gap-4 lg:top-[75px]`}>
				<PillSkeleton />
				<PillSkeleton />
				<PillSkeleton />
				<div className="items-center hidden gap-4 md:flex">
					<PillSkeleton />
					<PillSkeleton />
				</div>
				<div className="items-center hidden gap-4 xl:flex">
					<PillSkeleton />
					<PillSkeleton />
				</div>
			</div>

			<div className="grid grid-cols-1 gap-6 px-1 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 2xl:gap-8">
				{Array.from({ length: 16 }).map((_, index) => (
					<RestaurantCardSkeletion key={"restaurant-card-skeleton" + index} />
				))}
			</div>
		</div>
	);
};

export default RestaurantsLoader;
/* <div
			onClick={onClick}
			className={`flex justify-start max-w-max items-center gap-2 px-2 py-1.5 border rounded-full  hover:cursor-pointer md:px-3 xl:py-2 hover:shadow ${
				active && "bg-primary/25"
			}`}> */
