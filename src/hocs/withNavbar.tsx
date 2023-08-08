﻿import { ComponentType } from "react";
import Navbar from "../components/common/Navbar";

const withNavbar = <T extends object>(WrappedComponent: ComponentType<T>) => {
	const WithNavbar = (props: T) => {
		return (
			<div className="w-screen">
				<Navbar />
				<div className="w-full pt-[60px] lg:pt-[80px]">
					<WrappedComponent {...props} />
				</div>
			</div>
		);
	};

	return WithNavbar;
};

export default withNavbar;
