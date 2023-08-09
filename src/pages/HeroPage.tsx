import Logo from "../components/common/Logo";
import SocialLinks from "../components/hero/SocialLinks";
import StoreButtons from "../components/hero/StoreButtons";
import FooterText from "../components/hero/FooterText";
import ServicesInCities from "../components/hero/ServicesInCities";
import SearchBar from "../components/hero/SearchBar";
import { useAppSelector } from "../hook/reduxHooks";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";

const HeroPage = () => {
	const { geo_location } = useAppSelector((store) => store.device);
	const navigate = useNavigate();
	useLayoutEffect(() => {
		if (geo_location) {
			const city = geo_location.address.city;
			const district = geo_location.address.state;
			navigate(`/${city || district}`, {
				replace: true,
			});
		}
	}, [geo_location, navigate]);
	return (
		<div className="w-screen h-screen overflow-y-scroll bg-[#f9f9f9] flex flex-col bg-none bg-contain bg-right bg bg-no-repeat lg:bg-[url('/hero-image.avif')]">
			<div className="w-full p-0 lg:w-[800px] bg-[#f9f9f9] lg:ml-[40px] 2xl:ml-[200px]">
				<div className="h-[200px] p-2 bg-[url('/hero-image.avif')] bg-cover flex justify-between items-center lg:bg-none lg:h-[250px] 2xl:h-[280px]">
					<div className="scale-100 md:scale-150 md:ml-10">
						<Logo />
					</div>
					<div className="flex items-center h-full gap-1 text-xs md:text-lg">
						<button className="px-7 py-2 font-bold hover:text-[#7ed957] backdrop-blur-sm">
							Login
						</button>
						<button className="p-2 font-bold text-white bg-black shadow-md md:px-7">
							Sign up
						</button>
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
			<div className="w-full p-2 pt-[100px] bg-[#f9f9f9] lg:w-[800px] lg:ml-[40px] 2xl:ml-[200px]">
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

export default HeroPage;
