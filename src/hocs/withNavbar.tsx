import { ComponentType } from "react";
import Navbar from "../components/common/Navbar";

const withNavbar = <T extends object>(WrappedComponent: ComponentType<T>) => {
	const WithNavbar = (props: T) => {
		return (
			<div className="w-full">
				<Navbar />
				<WrappedComponent {...props} />
			</div>
		);
	};

	return WithNavbar;
};

export default withNavbar;
