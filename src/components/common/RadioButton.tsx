interface Props {
	active?: boolean;
}
const RadioButton = ({ active }: Props) => {
	return (
		<div
			className={`outline outline-1 outline-offset-2 rounded-full
            ${active ? "outline-primary" : "outline-black/30 dark:outline-lightwhite"}`}>
			<div
				className={`rounded-full w-[8px] aspect-square xl:w-[10px]
                ${active ? "bg-primary" : "bg-none"} `}
			/>
		</div>
	);
};

export default RadioButton;
