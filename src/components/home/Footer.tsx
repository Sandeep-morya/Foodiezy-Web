import SocialLinks from "../hero/SocialLinks";
import StoreButtons from "../hero/StoreButtons";
import FooterText from "../hero/FooterText";
import Logo from "../common/Logo";

const Footer = () => {
	return (
		<div className="w-full mt-20 p-2 pt-6 bg-[#f9f9f9] gap-y-10 md:px-8 2xl:px-48 xl:py-10">
			<div className="flex flex-col-reverse items-start gap-4 md:flex-row md:justify-between">
				<div className="grid gap-2 mb-2">
					<SocialLinks />
					<StoreButtons />
				</div>
				<div className="ml-4 scale-125">
					<Logo dim />
				</div>
			</div>
			<div className="flex flex-col pb-4 mt-4 border-t-2">
				<FooterText />
			</div>
		</div>
	);
};

export default Footer;
