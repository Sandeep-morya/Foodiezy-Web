interface Props {
	id: string;
	name: string;
	image: string;
}
const Card = ({ id, name, image }: Props) => {
	return (
		<div
			onClick={() => console.log(id)}
			className="w-[70px] min-w-[70px] aspect-[4/6] flex items-center md:w-[100px] md:min-w-[100px] snap-start md:gap-2 lg:min-w-[125px] xl:[150px] 2xl:min-w-[160px]">
			<img loading="lazy" className="rounded-full" src={image} alt={name} />
		</div>
	);
};

export default Card;
