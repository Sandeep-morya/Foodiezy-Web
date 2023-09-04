import { useCallback, useRef, useState } from "react";
import { PiCaretCircleLeft, PiCaretCircleRight } from "react-icons/pi";

// :: Types import ::
import type { Collection } from "../../types";

// :: Custom Components ::
import CollectionCard from "./CollectionCard";

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
		<article className="relative w-full mt-2">
			<section className="flex items-center justify-between px-4">
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
			</section>

			<section
				ref={collectionsRef}
				className="w-full overflow-x-scroll vanish-scroll-bar snap-x">
				<div className="grid items-center content-start self-start grid-cols-10 gap-1 w-max lg:gap-x-2 xl:gap-x-9 2xl:gap-x-16">
					{data.map((collection) => (
						<CollectionCard key={collection._id} {...collection} />
					))}
				</div>
			</section>
		</article>
	);
};

export default Collections;
