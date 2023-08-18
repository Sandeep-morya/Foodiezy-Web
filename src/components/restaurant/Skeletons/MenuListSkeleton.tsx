const MenuListSkeleton = () => {
	return (
		<div className="flex flex-col gap-1 pb-20 mt-4">
			{Array.from({ length: 8 }).map((_, index) => (
				<div
					key={index + "menu-list-skeleton"}
					className={`w-full flex items-center justify-between p-4 rounded-lg bg-black/10 ${
						index != 0 ? "h-[20px] my-2" : "h-[50px]"
					}`}
				/>
			))}
		</div>
	);
};

export default MenuListSkeleton;
