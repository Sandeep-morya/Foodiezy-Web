interface Props {
	active?: boolean;
}
const RadioButton = ({ active }: Props) => {
	return (
		<div
			className={`outline outline-1 outline-offset-2 rounded-full
            ${active ? "outline-primary" : "outline-black/30"}`}>
			<div
				className={`rounded-full w-[6px] aspect-square xl:w-[8px]
                ${active ? "bg-primary" : "bg-none"} `}
			/>
		</div>
	);
};

export default RadioButton;
