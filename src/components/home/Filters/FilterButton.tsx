import { FC } from "react";

interface Props {
	title: string;
	icon?: JSX.Element;
	active?: boolean;
	count?: number;
	onClick?: () => void;
}
const FilterButton: FC<Props> = ({
	title,
	icon,
	count = 0,
	active,
	onClick,
}) => {
	return (
		<button
			onClick={onClick}
			className={`flex justify-start max-w-max items-center gap-2 px-2 py-1.5 border rounded-full  hover:cursor-pointer md:px-3 xl:py-2 hover:shadow ${
				active && "bg-primary/25"
			} dark:bg-moredark dark:border-moredark`}>
			{count > 0 && (
				<div className="w-[18px] h-[18px] flex justify-center items-center rounded-full border bg-primary text-white lg:w-[20px] lg:h-[20px] text-[0.6rem] lg:text-xs dark:text-dark dark:border-dark">
					{count}
				</div>
			)}
			<p className="text-sm text-lightblack 2xl:text-base dark:text-lightwhite">{title}</p>
			{icon && (
				<div className="text-sm text-lightblack md:text-base dark:text-lightwhite">{icon}</div>
			)}
		</button>
	);
};

export default FilterButton;
