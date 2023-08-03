// import React from "react";

import Dishes from "../components/home/category/Dishes";
import WithNavbar from "../provider/WithNavbar";

const Homepage = () => {
	return (
		<WithNavbar>
			<div className="w-full flex flex-col px-1 md:px-8 lg:h-[70px] lg:px-16 2xl:px-24">
				<Dishes />
			</div>
		</WithNavbar>
	);
};

export default Homepage;
