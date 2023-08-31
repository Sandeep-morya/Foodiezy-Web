import { Dispatch, SetStateAction, useCallback, MouseEvent } from "react";
import { useAppSelector } from "../../hook/reduxHooks";
import { twMerge } from "tailwind-merge";
import MenuListSkeleton from "./Skeletons/MenuListSkeleton";

interface Props {
	tabIndex: number;
	setTabIndex: Dispatch<SetStateAction<number>>;
	toggleMenu: () => void;
}

const MenuList = (props: Props) => {
	const { tabIndex, setTabIndex, toggleMenu } = props;

	const menus = useAppSelector((store) => store.menu);

	const handleMenuSelect = useCallback(
		(event: MouseEvent<HTMLDivElement>) => {
			const clickedElement = event.target as HTMLElement;
			const target = clickedElement.closest("[data-index]");
			if (!target) {
				return; // When Clicked outside an element like "Gap"
			}
			const index = target.getAttribute("data-index");
			if (index) {
				setTabIndex(+index);
				toggleMenu();
			}
		},
		[setTabIndex, toggleMenu],
	);

	if (!menus) {
		return <MenuListSkeleton />;
	}

	return (
		<div onClick={handleMenuSelect} className="flex flex-col gap-1 pb-20 mt-4">
			{menus.map((data, index) => {
				const title = data.title;
				const itemCards = data?.categories
					? data.categories[0].itemCards
					: data.itemCards;
				return (
					<div
						key={title + index + "list"}
						data-index={index}
						className={twMerge(
							"w-full h-[50px] flex items-center justify-between p-4 rounded-lg ",
							tabIndex === index
								? "bg-primary text-white font-medium"
								: "bg-white text-lightblack",
						)}>
						<p>{title}</p>
						<p>{itemCards?.length}</p>
					</div>
				);
			})}
		</div>
	);
};

export default MenuList;
