import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	leftIcon: React.ReactNode;
	rightIcon?: React.ReactNode;
}

const Input = (props: Props) => {
	return (
		<div className="flex items-center gap-4 h-[45px] w-full border rounded-md overflow-hidden bg-white shadow-sm ">
			{props.leftIcon && <div className="pl-4">{props.leftIcon}</div>}

			{props.leftIcon && <div className="text-black/10 mb-0.5">{"|"}</div>}
			<div className="flex items-center flex-1 gap-4 pr-4">
				<input
					className="flex-1 text-sm capitalize outline-none placeholder:text-black/30 focus:border-none md:text-base"
					type="text"
					onChange={props.onChange}
					value={props.value}
					placeholder={props.placeholder}
				/>
				{props.rightIcon}
			</div>
		</div>
	);
};

export default Input;
