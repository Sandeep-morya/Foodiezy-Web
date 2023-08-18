const DishCardSkeleton = () => {
	return (
		<div className="relative dish-card w-full h-[240px] border rounded-lg bg-black/10">
			<div className="absolute bottom-0 p-2">
				<div className={"bg-black/30 w-[70px] h-[20px] rounded"} />
				<div className="mt-2 w-[130px] h-[20px] bg-black/20 rounded-full md:w-[200px] xl:h-[25px]" />
			</div>
		</div>
	);
};

export default DishCardSkeleton;
