import Logo from '../common/Logo';
import FooterText from '../hero/FooterText';
import SocialLinks from '../hero/SocialLinks';
import StoreButtons from '../hero/StoreButtons';

const Footer = () => {
	return (
		<div className="w-full p-2 pt-6 mt-40 bg-secondary gap-y-10 md:px-8 2xl:px-48 xl:py-10 dark:bg-dark">
			<div className="flex flex-col-reverse items-start gap-4 md:flex-row md:justify-between">
				<div className="grid gap-2 mb-2">
					<SocialLinks />
					<StoreButtons />
				</div>
				<div className="ml-4 scale-125">
					<Logo dim />
				</div>
			</div>
			<div className="flex flex-col pb-4 mt-4 border-t-2 dark:border-white/5">
				<FooterText />
			</div>
		</div>
	);
};

export default Footer;
