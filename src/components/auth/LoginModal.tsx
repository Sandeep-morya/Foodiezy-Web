import SocailButton from "./SocailButton";
import { FaGithub } from "react-icons/fa";
import PrivaryFooter from "./PrivaryFooter";
import { MdClose } from "react-icons/md";
import useGoogleLoginSuccess from "../../hook/useGoogleLoginSuccess";
import { useGoogleLogin } from "@react-oauth/google";
import { MouseEvent } from "react";

interface Props {
	toggleModal: () => void;
}

const LoginModal = ({ toggleModal }: Props) => {
	const { loading, onSuccess } = useGoogleLoginSuccess();
	const googleLogin = useGoogleLogin({
		onSuccess,
		onError: (error) => console.log(error),
	});

	const handleClose = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			toggleModal();
		}
	};

	return (
		<div
			onClick={handleClose}
			className="fixed w-screen h-screen top-0 left-0 z-[1000] bg-black/50 center">
			<div className="relative w-full h-full rounded-lg bg-secondary px-4 py-8 flex flex-col justify-between md:w-[500px] md:h-[650px] md:px-8 shadow-[0_0_10px_#0009] overflow-hidden">
				<div>
					<img
						src="/logo.svg"
						className="w-[100px]"
						loading="lazy"
						alt="tailus logo"
					/>
					<h2 className="mt-4 text-2xl font-bold text-black/30">
						Sign in to unlock the <br />
						best of Foodiezy.
					</h2>
				</div>
				<div className="grid gap-4 -mt-16">
					<SocailButton
						onClick={googleLogin}
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

				<div
					className="absolute text-xl transition-all duration-500 rounded-full bg-secondary hover:bg-primary/25 hover:rotate-90 md:text-2xl right-10 top-10"
					onClick={toggleModal}>
					<MdClose />
				</div>
				{loading && (
					<div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full backdrop-blur-sm bg-black/50">
						<div className="w-[80px] h-[80px]">
							<img
								className="object-contain w-full h-full animate-spin "
								src="/only-smile.png"
								alt=""
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default LoginModal;
