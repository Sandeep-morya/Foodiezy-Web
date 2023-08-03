import Navbar from "../components/common/Navbar";

const WithNavbar = ({ children }: { children: JSX.Element }) => {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
};

export default WithNavbar;
