const CollectionCardSkeleton = () => {
	return (
		<div className="w-[90px] snap-start flex flex-col items-center gap-3 md:w-[125px] lg:w-[135px] xl:w-[150px] 2xl:w-[164px]">
			<div className="w-[72%] aspect-square rounded-full bg-black/20" />
			<div className="w-[70%] h-[10px] bg-black/20 rounded-md md:h-[15px]" />
		</div>
	);
};

export default CollectionCardSkeleton;
