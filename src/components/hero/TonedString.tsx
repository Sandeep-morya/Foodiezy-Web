interface Props {
	value: string;
	query: string;
}
const TonedString = ({ value, query }: Props) => {
	const target = query.split(" ")[0];
	const dullTexts = value.slice(target.length);
	return (
		<p className="font-[500] p-2 text-sm hover:bg-black/5 md:text-base">
			<span className="capitalize text-black/80">{query}</span>
			<span className="text-black/30">{" " + dullTexts}</span>
		</p>
	);
};

export default TonedString;
