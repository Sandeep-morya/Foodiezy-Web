import type { Collection } from "../../types";
import { LOW_IMG_LINK } from '../../utils/links';

const CollectionCard = (data: Collection) => {
	return (
		<div
			onClick={() => console.log(data.collectionId)}
			className="relative w-[90px] min-w-[90px] snap-start md:min-w-[125px] lg:min-w-[135px] xl:min-w-[150px] 2xl:min-w-[164px]">
			<img
				loading="lazy"
				src={LOW_IMG_LINK + data.imageId}
				alt={data.altText}
			/>
		</div>
	);
};

export default CollectionCard;
