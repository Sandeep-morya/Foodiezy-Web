import { ReactNode, InputHTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	leftIcon: ReactNode;
	rightIcon?: ReactNode;
}

const Input = (props: Props) => {
	const [focus, setFocus] = useState(false);
	return (
		<div
			role="Input-box"
			className={twMerge(
				"flex items-center gap-4 h-[45px] w-full border rounded-md overflow-hidden bg-white shadow-sm dark:bg-moredark dark:border-moredark dark:text-lightwhite",
				focus && "outline-1 outline outline-primary  dark:outline-lightwhite",
			)}>
			{props.leftIcon && <div className="pl-4">{props.leftIcon}</div>}

			{props.leftIcon && <div className="text-black/10 mb-0.5 dark:text-white/10">{"|"}</div>}
			<div className="flex items-center flex-1 gap-4 pr-4">
				<input
					className="flex-1 text-sm outline-none placeholder:text-black/30 focus:border-none md:text-base dark:bg-moredark dark:placeholder:text-white/10 dark:text-white/50"
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					type="text"
					onChange={props.onChange}
					value={props.value}
					placeholder={props.placeholder}
					autoFocus
					spellCheck
				/>
				{props.rightIcon}
			</div>
		</div>
	);
};

export default Input;
