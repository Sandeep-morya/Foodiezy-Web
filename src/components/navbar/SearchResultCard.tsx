import { MdDeliveryDining, MdLocationPin } from "react-icons/md";
import { PiPath } from "react-icons/pi";

import { MD_IMG_LINK } from "../../utils/links";

import type { Restaurant } from "../../types";
import { useNavigate } from "react-router-dom";
import Rating from "../home/Rating";
import Pills from "../home/Pills";

const SearchResultCard = (data: Restaurant) => {
	const navigate = useNavigate();

	return (
		<div
			onClick={() => {
				navigate(
					`/restaurant/${data.name.split(" ").join("-")}?id=${
						data._id
					}&restaurantId=${data.restaurantId}`,
				);
			}}
			className="flex flex-row gap-0 overflow-hidden rounded-lg group ring-1 ring-gray-200 hover:ring-primary/50 dark:ring-moredark">
			<div className="relative w-[45%] overflow-hidden aspect-[3/4] transition">
				{/* Actual Image of Restaurant */}
				<img
					loading="lazy"
					src={MD_IMG_LINK + data.imageId}
					className="object-cover w-full h-full md:aspect-[3/2] group-hover:scale-110 transition"
					alt={data.imageId}
				/>
				{/* Placeholder image */}
				<div className="absolute inset-0 flex items-center justify-center object-cover -z-10 bg-black/20">
					<img
						className="grayscale h-[30%] aspect-square object-contain"
						src="/only-smile.png"
						alt="logo-skeleton-image"
					/>
				</div>

				<div className="absolute flex items-center justify-start px-2 py-0.5 text-xs font-semibold shadow-lg bg-white rounded-tl-full rounded-bl-full uppercase -right-1 bottom-5 dark:bg-moredark dark:text-lightwhite">
					{`₹${data.costForTwo} for Two`}
				</div>
			</div>
			<div className="flex flex-col flex-1 gap-2 p-3 bg-white md:p-2 xl:gap-3 xl:p-3 xl:pt-2 dark:bg-moredark dark:text-lightwhite">
				<div className="flex justify-start">
					<Pills veg={data.veg} />
				</div>

				<div className="flex flex-col">
					<h3 className="font-semibold text-md md:text-lg">
						{data.name?.substring(0, 30)}
					</h3>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-1">
							<p className="text-xs ">
								{data.cuisines.slice(0, 2).join(", ")}
								{data.cuisines.length > 2 && " & more..."}
							</p>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-start gap-1 text-green-600 drop-shadow-sm ">
					<Rating rating={data.rating} votes={data.votesString} />
				</div>

				<div className="flex flex-col gap-2">
					<div className="flex items-center justify-start gap-2 md:gap-1">
						<MdLocationPin />
						<p className="text-xs">
							{data.locality.substring(0, 13) || data.areaName}
						</p>
					</div>
					<div className="flex items-center justify-start gap-2 font-medium md:gap-1">
						<MdDeliveryDining />
						<p className="text-xs">{data.delivery.duration}</p>
					</div>
					<div className="flex items-center justify-start gap-2 md:gap-1">
						<PiPath />
						<p className="text-xs">{data.delivery.distance}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchResultCard;
