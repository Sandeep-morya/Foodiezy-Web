import type { Collection } from "../../types";

const CollectionCard = (data: Collection) => {
	return (
		<div
			onClick={() => console.log(data.collectionId)}
			className="w-[90px] min-w-[90px] snap-start md:min-w-[125px] lg:min-w-[135px] xl:min-w-[150px] 2xl:min-w-[164px]">
			<img
				src={`https://res.cloudinary.com/swiggy/image/upload/${data.imageId}`}
				alt={data.altText}
			/>
		</div>
	);
};

export default CollectionCard;
