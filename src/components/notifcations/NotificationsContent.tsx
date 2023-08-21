// import React from 'react'

import { PiBellDuotone } from "react-icons/pi";

const NotificationsContent = () => {
	return (
		<div className="w-full h-full center ">
			<div className="center flex-col -mt-24">
				<div className="text-8xl text-primary">
					<PiBellDuotone />
				</div>
				<div className="text-xl font-medium text-primary">
					Not even a single notification
				</div>
			</div>
		</div>
	);
};

export default NotificationsContent;
