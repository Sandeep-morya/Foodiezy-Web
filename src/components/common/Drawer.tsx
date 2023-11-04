import { useCallback, useEffect, useState, MouseEvent } from "react";
import { MdClose } from "react-icons/md";
import { twMerge } from "tailwind-merge";

interface Props {
	right?: boolean;
	slideEffect?: number;
	content: JSX.Element;
	label: React.ReactNode;
	withScrollbar?: boolean;
	toggleDrawer: () => void;
	animationDuration?: number;
}

const Drawer = ({
	content,
	right,
	label,
	toggleDrawer,
	withScrollbar,
	slideEffect = 0,
	animationDuration = 250,
}: Props) => {
	const [isDrawerOpen, setDrawerOpen] = useState(false);

	const handleClose = useCallback(() => {
		setDrawerOpen(false);
		setTimeout(() => {
			toggleDrawer();
		}, animationDuration);
	}, [toggleDrawer, animationDuration]);

	const CloseDrawer = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			handleClose();
		}
	};

	useEffect(() => {
		setDrawerOpen(true);
		document.body.style.overflowY = withScrollbar ? "auto" : "hidden";
		document.body.style.marginLeft = right
			? `-${slideEffect}px`
			: `${slideEffect}px`;

		return () => {
			document.body.style.overflowY = "auto";
			document.body.style.marginLeft = "0";
		};
	}, [right, slideEffect, withScrollbar]);

	return (
		<main
			onClick={CloseDrawer}
			className="fixed flex top-0 left-0 w-screen h-screen z-[500] bg-black/50">
			<article
				className={twMerge(
					`w-full h-full md:w-[400px] pt-1 px-2 bg-white transition-all ease-out duration-${animationDuration} absolute ${
						right ? "-right-[400px]" : "-left-[400px]"
					} dark:bg-dark`,
					isDrawerOpen && (right ? "right-0" : "left-0"),
				)}>
				<div className="flex items-start justify-between p-2">
					<h1 className="text-lg font-semibold tracking-wide md:text-xl dark:text-lightwhite">
						{label}
					</h1>
					<div
						onClick={handleClose}
						className="p-1 mr-2 text-xl transition-all bg-white rounded-full hover:bg-primary/25 lg:text-2xl dark:bg-primary dark:text-dark">
						<MdClose />
					</div>
				</div>
				{content}
			</article>
		</main>
	);
};

export default Drawer;
