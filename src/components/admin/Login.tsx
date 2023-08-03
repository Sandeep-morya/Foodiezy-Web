import { useState } from "react";
import Button from "../common/Button";
import { MdLockOutline, MdMailOutline, MdLogin } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import {
	PiCheck,
	PiEyeClosedDuotone,
	PiEyeDuotone,
	PiInfo,
} from "react-icons/pi";

const Login = () => {
	const [show, setShow] = useState(false);
	return (
		<div className="w-[300px] h-[420px] flex flex-col p-2 backdrop-blur-sm backdrop-brightness-50 rounded-xl overflow-hidden shadow-black shadow justify-center items-center md:w-[450px] md:h-[600px] xl:backdrop-brightness-100 xl:bg-white/10 xl:h-[500px] xl:p-3 2xl:h-[550px] 2xl:p-4">
			<img
				className="w-[100px] mt-4 aspect-square mx-auto shadow-sm md:w-[130px] xl:mt-6"
				src="/logo.svg"
			/>
			<div className="w-full flex flex-1 text-start flex-col rounded-md m-2 p-4 md:p-6 ">
				<h2 className="text-sm text-white md:text-base">
					<span className="text-base font-bold">Login </span> to your account to
					manange all the services, please
				</h2>

				<form className="mt-8 flex flex-col gap-y-0.5 items-center">
					<div className="flex h-10 bg-white w-full rounded-t-md overflow-hidden items-center px-2 md:h-12">
						<div className="text-md md:text-lg">
							<MdMailOutline />
						</div>
						<div className="text-md opacity-10 md:text-lg">
							<RxDividerVertical />
						</div>

						<input
							className="flex-1 bg-transparent border-none outline-none text-sm md:text-base"
							type="text"
							placeholder="Email"
						/>
						<div className="text-md md:text-lg">
							<PiCheck />
						</div>
					</div>
					<div className="flex h-10 bg-white w-full rounded-b-md overflow-hidden items-center px-2 md:h-12">
						<div className="text-md md:text-lg">
							<MdLockOutline />
						</div>
						<div className="text-md opacity-10 md:text-lg">
							<RxDividerVertical />
						</div>
						<input
							className="flex-1  bg-transparent border-none outline-none text-sm md:text-base"
							type={show ? "text" : "password"}
							placeholder="Password"
						/>
						<div
							className="text-md md:text-lg"
							onClick={() => setShow((e) => !e)}>
							{show ? <PiEyeDuotone /> : <PiEyeClosedDuotone />}
						</div>
					</div>

					<div className="self-start flex gap-1 items-center my-4 text-sm text-red-400 font-medium md:text-base">
						{<PiInfo />} Error Message will appear here
					</div>
					<div>
						<Button type="submit" icon={<MdLogin />}>
							Proceed
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
