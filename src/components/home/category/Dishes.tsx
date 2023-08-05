import { useState, useCallback, useRef } from "react";
import Card from "./Card";
import {
	PiCaretCircleLeft,
	PiCaretCircleRight,
	PiCaretDownBold,
	PiCaretUpBold,
} from "react-icons/pi";
import Button from "../../common/Button";
const data = [
	{
		id: "68987",
		image:
			"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
		name: "Pizza",
	},
	{
		id: "35013",
		image:
			"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
		name: "Thali",
	},
	{
		id: "9055",
		image:
			"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
		name: "Burger",
	},
	{
		id: "30308",
		image:
			"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
		name: "Biryani",
	},
	{
		id: "55280",
		image:
			"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
		name: "Chicken",
	},
	{
		id: "39212",
		image:
			"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
		name: "Cake",
	},
	{
		id: "56691",
		image:
			"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
		name: "Rolls",
	},
	{
		id: "35798",
		image:
			"https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg",
		name: "North Indian",
	},
	{
		id: "11035",
		image:
			"https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
		name: "Paneer",
	},
	{
		id: "10296",
		image:
			"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
		name: "Dosa",
	},
	{
		id: "19315",
		image:
			"https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
		name: "Noodles",
	},
	{
		id: "45873",
		image:
			"https://b.zmtcdn.com/data/o2_assets/2f34540e0b12058f5f8b9390c3a3fb4a1648972281.png",
		name: "Shawarma",
	},
];

const Dishes = () => {
	const [showAll, setShowAll] = useState(false);
	const dishesRef = useRef<HTMLDivElement>(null);
	// console.log({ showAll });
	const handleScroll = useCallback(
		(direction: "left" | "right") => {
			setShowAll(true);
			const element = dishesRef.current;
			if (element) {
				const left = direction === "left" ? 0 : element.scrollWidth;
				element.scrollTo({ left, behavior: "smooth" });
			}
		},
		[dishesRef],
	);

	return (
		<div className="flex flex-col w-full gap-6 p-2 mt-4">
			<div className="flex justify-between">
				<h1 className="text-xl font-semibold md:text-2xl xl:text-3xl">
					Eat what makes you happy
				</h1>
				<div className="hidden gap-3 md:flex">
					<div
						onClick={() => handleScroll("left")}
						className="text-3xl xl:text-4xl">
						<PiCaretCircleLeft />
					</div>
					<div
						onClick={() => handleScroll("right")}
						className="text-3xl xl:text-4xl">
						<PiCaretCircleRight />
					</div>
				</div>
			</div>
			<div
				ref={dishesRef}
				className="flex flex-wrap justify-center overflow-x-hidden dishes snap-x snap-mandatory hide scrollbar-thin gap-x-4 md:justify-start md:overflow-x-scroll md:flex-nowrap md:gap-x-7 lg:gap-x-12 xl:gap-x-14 2xl:gap-x-16">
				{data.slice(0, showAll ? data.length : 8).map((dish) => (
					<Card key={dish.id} {...dish} />
				))}
				<Button
					onClick={() => setShowAll((e) => !e)}
					icon={showAll ? <PiCaretUpBold /> : <PiCaretDownBold />}
					className="justify-center w-full border rounded-md text-black/50 border-black/20 md:hidden">
					{showAll ? "Show less" : "Show more"}
				</Button>
			</div>
		</div>
	);
};

export default Dishes;
