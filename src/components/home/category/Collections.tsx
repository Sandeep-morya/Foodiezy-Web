import { Collection } from "../../../types";
import { useCallback, useRef, useState } from "react";

import CollectionCard from "./CollectionCard";
import { PiCaretCircleLeft, PiCaretCircleRight } from "react-icons/pi";

const Collections = ({ data }: { data: Collection[] }) => {
	const [showLeftButton, setShowLeftButton] = useState(false);
	const [showRightButton, setShowRightButton] = useState(true);
	const collectionsRef = useRef<HTMLDivElement>(null);
	const handleScroll = useCallback((left: number) => {
		const element = collectionsRef.current;
		if (element) {
			const scrollableWidth = element.scrollWidth - element.clientWidth;
			element.scrollBy({ left, behavior: "smooth" });
			setShowLeftButton(element.scrollLeft + left > 0);
			setShowRightButton(element.scrollLeft < scrollableWidth - left);
		}
	}, []);

	return (
		<div className="w-full relative mt-2">
			<div className="flex justify-between items-center px-4">
				<h1 className="text-lg font-semibold tracking-wide md:text-xl xl:text-2xl">
					Eat what you like most
				</h1>
				<div className="flex gap-2 text-2xl md:text-3xl">
					<div
						className={` text-black ${
							showLeftButton ? "text-black" : "text-black/20"
						}`}
						onClick={
							showLeftButton
								? () => handleScroll(-window.innerWidth)
								: undefined
						}>
						<PiCaretCircleLeft />
					</div>

					<div
						className={`text-black ${
							showRightButton ? "text-black" : "text-black/20"
						}`}
						onClick={
							showRightButton
								? () => handleScroll(window.innerWidth)
								: undefined
						}>
						<PiCaretCircleRight />
					</div>
				</div>
			</div>

			<div
				ref={collectionsRef}
				className="w-full flex overflow-x-scroll vanish-scroll-bar snap-x">
				{data.map((collection) => (
					<CollectionCard key={collection._id} {...collection} />
				))}
			</div>
		</div>
	);
};

export default Collections;
