interface Props {
	id: string;
	name: string;
	image: string;
}
const Card = ({ id, name, image }: Props) => {
	return (
		<div
			onClick={() => console.log(id)}
			className="w-[70px] min-w-[70px] aspect-[4/6] flex flex-col gap-1 items-center md:w-[100px] md:min-w-[100px] md:gap-2 lg:min-w-[125px] xl:[150px] 2xl:min-w-[160px]">
			<img loading="lazy" className="rounded-full" src={image} alt={name} />
			<h2 className="text-xs text-center md:text-sm lg:text-base xl:text-lg">
				{name}
			</h2>
		</div>
	);
};

export default Card;
