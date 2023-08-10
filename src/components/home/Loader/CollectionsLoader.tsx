const CollectionsLoader = () => {
	return (
		<div className="grid w-full gap-4 my-3 animate-pulse md:gap-6 md:mb-6 2xl:my-6">
			<div className="flex items-center justify-between px-4">
				<div className="w-[200px] h-[20px] bg-black/20 rounded-md md:w-[300px] xl:h-[25px]" />
				<div className="flex gap-3">
					<div className="w-[20px] aspect-square lg:w-[30px] bg-black/20 rounded-full" />
					<div className="w-[20px] aspect-square lg:w-[30px] bg-black/20 rounded-full" />
				</div>
			</div>
			<div className="w-full overflow-x-scroll vanish-scroll-bar snap-x">
				<div className="grid items-center content-start self-start grid-cols-10 gap-1 gap-y-8 xl:gap-y-16 w-max lg:gap-x-2 xl:gap-x-9 2xl:gap-x-16 ">
					{Array.from({ length: 20 }).map((_, index) => (
						<div
							key={index + "collection-card-sekeletion"}
							className="w-[90px] snap-start flex flex-col items-center gap-3 md:w-[125px] lg:w-[135px] xl:w-[150px] 2xl:w-[164px]">
							<div className="w-[72%] aspect-square rounded-full bg-black/20" />
							<div className="w-[70%] h-[10px] bg-black/20 rounded-md md:h-[15px]" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CollectionsLoader;
