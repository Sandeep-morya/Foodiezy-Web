// import React from 'react'

import { MdLocationOn } from "react-icons/md";
import Input from "../common/Input";
import { PiMagnifyingGlass } from "react-icons/pi";

const DrawerContent = () => {
	return (
		<div className="p-2">
			<Input
				leftIcon={<MdLocationOn />}
				placeholder="What is your current city ?"
				rightIcon={<PiMagnifyingGlass />}
			/>
		</div>
	);
};

export default DrawerContent;
