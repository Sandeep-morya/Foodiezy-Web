import DishCardSkeleton from "./DishCardSkeleton";

const MenuContentSkeleton = () => {
	return (
		<div className="flex flex-col w-full h-auto gap-2 pb-10 lg:h-full lg:overflow-y-scroll vanish-scroll-bar animate-pulse">
			<div className="sticky z-10 flex flex-col p-2 pb-6 bg-white -top-5 md:-top-2 lg:top-0 xl:pt-0 md:flex-row md:gap-10 md:items-center md:justify-between dark:bg-dark">
				<div className="w-[250px] mb-3 h-[20px] bg-black/20 rounded-md md:w-[375px] xl:h-[25px]" />
				<div className="flex-1 max-w-full md:max-w-[300px] min-h-[40px] bg-black/20 rounded-lg" />
			</div>

			<div className="grid grid-cols-1 gap-3 px-2 mt-2 md:grid-cols-2 md:gap-4 xl:grid-cols-3 2xl:grid-cols-4">
				{Array.from({ length: 12 }).map((_, index) => (
					<DishCardSkeleton key={index + "dish-card-skeleton"} />
				))}
			</div>
		</div>
	);
};

export default MenuContentSkeleton;
