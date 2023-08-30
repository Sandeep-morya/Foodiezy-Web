import { useState } from "react";
import Drawer from "../common/Drawer";
import BotDrawerContent from "./BotDrawerContent";
const Bot = () => {
	const [showDrawer, setShowDrawer] = useState(false);
	const toggleDrawer = () => {
		setShowDrawer((e) => !e);
	};
	return (
		<div>
			<div
				onClick={toggleDrawer}
				className="fixed bottom-6 right-2 w-[40px] h-[40px]  md:right-6 xl:bottom-10 xl:right-10 xl:w-[50px] xl:h-[50px] bg-lightblack rounded-full bg-[url('/bot.png')] bg-center bg-contain shadow-xl shadow-black/25 active:scale-90"></div>
			{showDrawer && (
				<Drawer
					right
					content={<BotDrawerContent />}
					label={
						<div className="w-[45px] h-[45px] bg-lightblack rounded-full bg-[url('/bot.png')] bg-center bg-contain shadow-xl " />
					}
					toggleDrawer={toggleDrawer}
				/>
			)}
		</div>
	);
};

export default Bot;
