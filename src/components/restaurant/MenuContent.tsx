import { useMemo, useEffect, useState } from "react";
import Input from "../common/Input";
import DishCard from "./DishCard";
import { MdFastfood } from "react-icons/md";
import { PiMagnifyingGlass } from "react-icons/pi";
import { useAppSelector } from "../../hook/reduxHooks";

interface Props {
	tabIndex: number;
}
const MenuContent = ({ tabIndex }: Props) => {
	const menu = useAppSelector((store) => store.menu);
	const [query, setQuery] = useState("");

	const currentMenu = useMemo(
		() => (menu ? menu[tabIndex] : null),
		[menu, tabIndex],
	);

	const [menuList, setMenuList] = useState(() => {
		if (currentMenu) {
			// if (currentMenu.title === "Breakfast") {
			// 	return currentMenu.categories[0].itemCards;
			// } else {
			return currentMenu.itemCards;
			// }
		} else {
			return null;
		}
	});

	useEffect(() => {
		setQuery("");
	}, [tabIndex]);

	useEffect(() => {
		if (currentMenu) {
			setMenuList(() => {
				const list = currentMenu.itemCards;
				// if (currentMenu.title === "Breakfast") {
				// 	list = currentMenu.categories[0].itemCards;
				// }
				const itemCards = list.filter((e) =>
					e.card.info.name.toLowerCase().includes(query.toLowerCase().trim()),
				);
				return itemCards;
			});
		}
	}, [query, currentMenu]);

	if (!currentMenu || !menuList) {
		return <>Loading...</>;
	}

	return (
		<div className="w-full h-auto lg:h-full lg:overflow-y-scroll  vanish-scroll-bar flex flex-col gap-2 pb-10">
			<div className="sticky -top-5 z-10  flex flex-col pb-4 md:-top-2  lg:top-0 p-2 xl:pt-0 bg-white md:flex-row md:gap-10 md:items-center md:justify-between">
				<h2 className="text-lg mb-1 font-semibold tracking-wide md:text-xl xl:text-2xl">{`${currentMenu.title} (${menuList.length})`}</h2>
				<div className="flex-1 max-w-full md:max-w-[300px]">
					<Input
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Search "
						leftIcon={<MdFastfood />}
						rightIcon={<PiMagnifyingGlass />}
					/>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-3 mt-2 md:grid-cols-2 px-2 md:gap-4 xl:grid-cols-3 2xl:grid-cols-4">
				{menuList.map(({ card }, index) => (
					<DishCard key={card.info.id + index} {...card.info} />
				))}
			</div>
		</div>
	);
};

export default MenuContent;
