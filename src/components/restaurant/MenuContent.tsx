import { useMemo, useEffect, useState } from "react";
import Input from "../common/Input";
import DishCard from "./DishCard";
import { MdFastfood } from "react-icons/md";
import { PiMagnifyingGlass } from "react-icons/pi";
import { useAppSelector } from "../../hook/reduxHooks";
import MenuContentSkeleton from "./Skeletons/MenuContentSkeleton";

interface Props {
	tabIndex: number;
	restaurantId: string;
	restaurantName: string;
}
const MenuContent = ({ tabIndex, restaurantId, restaurantName }: Props) => {
	const menu = useAppSelector((store) => store.menu);
	const [query, setQuery] = useState("");

	const currentMenu = useMemo(
		() => (menu ? menu[tabIndex] : null),
		[menu, tabIndex],
	);

	const [menuList, setMenuList] = useState(() => {
		if (currentMenu) {
			return currentMenu?.categories
				? currentMenu.categories[0].itemCards
				: currentMenu.itemCards;
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
				const list = currentMenu?.categories
					? currentMenu.categories[0].itemCards
					: currentMenu.itemCards;

				const itemCards = list.filter((e) =>
					e.card.info.name.toLowerCase().includes(query.toLowerCase().trim()),
				);
				return itemCards;
			});
		}
	}, [query, currentMenu]);

	if (!currentMenu || !menuList) {
		return <MenuContentSkeleton />;
	}
	return (
		<article className="flex flex-col w-full h-auto gap-2 pb-10 menu-content lg:h-full lg:overflow-y-scroll vanish-scroll-bar">
			<section className="sticky z-10 flex flex-col p-2 pb-4 bg-white -top-5 md:-top-2 lg:top-0 xl:pt-0 md:flex-row md:gap-10 md:items-center md:justify-between dark:bg-dark">
				<h2 className="mb-1 text-lg font-semibold tracking-wide md:text-xl xl:text-2xl dark:text-lightwhite">{`${currentMenu.title} (${menuList.length})`}</h2>
				<div className="flex-1 max-w-full md:max-w-[300px]">
					<Input
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Search "
						leftIcon={<MdFastfood />}
						rightIcon={<PiMagnifyingGlass />}
					/>
				</div>
			</section>

			<section className="grid grid-cols-1 gap-3 px-2 mt-2 md:grid-cols-2 md:gap-4 xl:grid-cols-3 2xl:grid-cols-4">
				{menuList.map(({ card }) => (
					<DishCard
						key={card.info.id}
						info={card.info}
						{...{ restaurantId, restaurantName }}
					/>
				))}
			</section>
		</article>
	);
};

export default MenuContent;
