//

const Logo = ({ dim }: { dim?: boolean }) => {
	return (
		<img
			className={`h-full ${
				dim && "brightness-0"
			} object-contain object-left-bottom w-[120px] md:w-[130px] lg:w-[150px]`}
			src="/logoname.png"
		/>
	);
};

export default Logo;
