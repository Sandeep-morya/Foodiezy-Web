import React from "react";
import { MdClose } from "react-icons/md";
import { useInView } from "react-intersection-observer";
// import Logo from "./Logo";

interface Props {
	showDrawer: boolean;
	toggleDrawer: () => void;
	content: JSX.Element;
	label: React.ReactNode;
}

const Drawer = ({ showDrawer, toggleDrawer, content, label }: Props) => {
	const { inView, ref } = useInView();

	return showDrawer ? (
		// overlay and data
		<div
			ref={ref}
			className="fixed top-0 left-0 w-screen h-screen overflow-y-scroll z-[500] bg-black/50">
			{/* is containg the data */}
			<div
				className={`w-full h-full md:w-[400px] ${
					inView ? "ml-0" : "-ml-[100%]"
				}  pt-1 px-2 bg-white transition-all ease-out duration-500`}>
				<div className="flex items-start justify-between p-2">
					<h1 className="text-lg font-semibold tracking-wide md:text-xl">
						{label}
					</h1>
					<div
						onClick={toggleDrawer}
						className="p-1 mr-2 text-xl transition-all bg-white rounded-full hover:bg-primary/25 lg:text-2xl">
						<MdClose />
					</div>
					{/* <div>
						<Logo />
					</div> */}
				</div>
				{content}
			</div>
		</div>
	) : (
		<></>
	);
};

export default Drawer;
