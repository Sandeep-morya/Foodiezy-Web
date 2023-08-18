import { FaGithub } from "react-icons/fa";
import PrivaryFooter from "../components/auth/PrivaryFooter";
import SocailButton from "../components/auth/SocailButton";

const LoginPage = () => {
	return (
		<div className="relative flex items-center justify-center w-screen h-screen bg-[url('/admin-login-bg.avif')] bg-center bg-cover">
			<div className="container relative p-0 m-auto text-gray-500 md:px-12 xl:px-40">
				<div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
					<div className="bg-[url('/admin-login-bg.avif')] bg-center shadow-[0_0_20px_5px_#000] rounded-xl">
						<div className="p-6 sm:p-16">
							<div className="space-y-4">
								<img
									src="/logo.svg"
									className="w-[100px]"
									loading="lazy"
									alt="tailus logo"
								/>
								<h2 className="mb-8 text-2xl font-bold text-secondary">
									Sign in to unlock the <br /> best of Foodiezy.
								</h2>
							</div>
							<div className="grid mt-16 space-y-4">
								<SocailButton
									icon={
										<img
											src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
											className="absolute left-0 w-5"
											alt="google logo"
										/>
									}
									title="Continue with Google"
								/>
								<SocailButton
									icon={
										<div className="absolute left-0 w-5 text-xl text-black">
											<FaGithub />
										</div>
									}
									title="Continue with Github"
								/>
								<SocailButton
									icon={
										<img
											src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
											className="absolute left-0 w-5"
											alt="Facebook logo"
										/>
									}
									title="Continue with Facebook"
								/>
							</div>

							<PrivaryFooter />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
