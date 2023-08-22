import { Navigate } from "react-router-dom";

import Logo from "../components/common/Logo";
import FooterText from "../components/hero/FooterText";
import SearchBar from "../components/hero/SearchBar";
import ServicesInCities from "../components/hero/ServicesInCities";
import SocialLinks from "../components/hero/SocialLinks";
import StoreButtons from "../components/hero/StoreButtons";
import { useAppSelector } from "../hook/reduxHooks";

const LandingPage = () => {
	const { serviceArea } = useAppSelector((store) => store.device);

	if (serviceArea) {
		return <Navigate to={`/${serviceArea.name}`} replace />;
	}

	return (
		<div className="w-screen h-screen overflow-y-scroll bg-secondary flex flex-col bg-none bg-contain bg-right bg bg-no-repeat lg:bg-[url('/hero-image.avif')]">
			<div
				style={{
					backgroundImage: "linear-gradient(to right , #f9f9f9 60%,transparent",
				}}
				className="w-full p-0 lg:w-[800px]  lg:ml-[40px] 2xl:ml-[200px]">
				<div className="h-[200px] p-2 bg-[url('/hero-image.avif')] bg-cover flex justify-between items-center lg:bg-none lg:h-[250px] 2xl:h-[280px]">
					<div className="scale-100 md:scale-150 md:ml-10">
						<Logo />
					</div>
				</div>
				<div className="w-full p-2">
					<div className="w-full pt-6 lg:pt-0">
						<h1 className="text-2xl font-bold text-gray-500 lg:text-3xl 2xl:text-4xl">
							Feeling hungry?
						</h1>
						<p className="text-xl text-gray-500">
							Order food from favourite restaurants near you.
						</p>
					</div>
					<SearchBar />

					<p className="text-sm text-gray-400 uppercase">
						Our Services in india
					</p>
					<ServicesInCities />
				</div>
			</div>
			<div
				style={{
					backgroundImage: "linear-gradient(to right , #f9f9f9 60%,transparent",
				}}
				className="w-full p-2 pt-[100px]  lg:w-[800px] lg:ml-[40px] 2xl:ml-[200px]">
				<div className="h-[340px]">
					<div className="w-full h-[50%] border-b py-6 flex flex-col justify-between">
						<SocialLinks />
						<StoreButtons />
					</div>
					<FooterText />
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
