// import React from "react";

import Dishes from "../components/home/category/Dishes";
import WithNavbar from "../provider/WithNavbar";

const Homepage = () => {
	return (
		<WithNavbar>
			<div>
				<Dishes />
			</div>
		</WithNavbar>
	);
};

export default Homepage;
