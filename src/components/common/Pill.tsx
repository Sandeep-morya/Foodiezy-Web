interface Props {
	title: string;
	color: string;
}
const Pill = ({ title, color }: Props) => {
	return (
		<div
			className={`text-[0.7rem] ${color} rounded-sm shadow-[0_0_3px_#0008] text-white uppercase px-1 flex justify-center items-center md:text-sm md:px-2 md:py-0.5`}>
			{title}
		</div>
	);
};

export default Pill;
