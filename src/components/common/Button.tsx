import { ReactNode, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: ReactNode;
	className?: string;
}
const Button = (props: Props) => {
	return (
		<button
			{...props}
			className={twMerge(
				`text-sm flex items-center py-3 px-5 gap-3 shadow-md text-black hover:opacity-75 transition font-medium md:text-base`,
				props.className,
			)}>
			{props.children}
			<div className="text-md md:text-lg">{props.icon}</div>
		</button>
	);
};

export default Button;
