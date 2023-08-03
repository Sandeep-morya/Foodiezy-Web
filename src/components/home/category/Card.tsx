interface Props {
	id: string;
	name: string;
	image: string;
}
const Card = ({ id, name, image }: Props) => {
	return (
		<div
			onClick={() => console.log(id)}
			className="w-[80px] min-w-[80px] aspect-[4/6] flex flex-col items-center">
			<img className="rounded-full" src={image} alt={name} />
			<h2 className="text-sm">{name}</h2>
		</div>
	);
};

export default Card;
