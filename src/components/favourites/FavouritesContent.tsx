// import React from 'react'

import { PiHeartBreakDuotone } from "react-icons/pi";

const FavouritesContent = () => {
	return (
		<div className="w-full h-full center ">
			<div className="center flex-col -mt-24">
				<div className="text-8xl text-red-500">
					<PiHeartBreakDuotone />
				</div>
				<div className="text-xl font-medium text-red-500">No items Found</div>
			</div>
		</div>
	);
};

export default FavouritesContent;
