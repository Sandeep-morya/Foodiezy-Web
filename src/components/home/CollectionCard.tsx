import type { Collection } from "../../types";

const CollectionCard = (data: Collection) => {
	return (
		<div
			onClick={() => console.log(data.collectionId)}
			className="min-w-[88px] snap-start md:min-w-[115px] xl:min-w-[127px] 2xl:min-w-[158px]">
			<img
				src={`https://res.cloudinary.com/swiggy/image/upload/${data.imageId}`}
				alt={data.altText}
			/>
		</div>
	);
};

export default CollectionCard;
