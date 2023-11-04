const PrivaryFooter = () => {
	return (
		<div className="flex flex-col gap-4 mb-4 text-center text-lightblack dark:text-lightwhite">
			<p className="text-xs">
				By proceeding, you agree to our{" "}
				<a href="#" className="underline">
					Terms of Use
				</a>{" "}
				and confirm you have read our{" "}
				<a href="#" className="underline">
					Privacy and Cookie Statement
				</a>
				.
			</p>
			<p className="text-xs">
				This site is protected by reCAPTCHA and the{" "}
				<a href="#" className="underline">
					Google Privacy Policy
				</a>{" "}
				and{" "}
				<a href="#" className="underline">
					Terms of Service
				</a>{" "}
				apply.
			</p>
		</div>
	);
};

export default PrivaryFooter;
