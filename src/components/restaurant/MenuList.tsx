import { Dispatch, SetStateAction } from "react";
import { useAppSelector } from "../../hook/reduxHooks";
import { twMerge } from "tailwind-merge";

interface Props {
	tabIndex: number;
	setTabIndex: Dispatch<SetStateAction<number>>;
	toggleMenu: () => void;
}

const MenuList = (props: Props) => {
	const menus = useAppSelector((store) => store.menu);

	if (!menus) {
		return <>Loading..</>;
	}
	return (
		<div className="flex flex-col gap-1 mt-4 pb-20">
			{menus.map(({ title, itemCards }, index) => {
				return (
					<div
						key={title + index + "list"}
						onClick={() => {
							props.setTabIndex(index);
							props.toggleMenu();
						}}
						className={twMerge(
							"w-full h-[50px] flex items-center justify-between p-4 rounded-lg ",
							props.tabIndex === index
								? "bg-primary text-white font-medium"
								: "bg-white text-lightblack",
						)}>
						<p>{title}</p>
						<p>{itemCards.length}</p>
					</div>
				);
			})}
		</div>
	);
};

export default MenuList;
