import { Link } from "react-router-dom";
import { MD_IMG_LINK } from "../../utils/links";

// :: Type Imports ::
import type { Restaurant } from "../../types";

// :: React Icons ::
import { MdDeliveryDining, MdLocationPin } from "react-icons/md";
import { PiPath } from "react-icons/pi";

// :: Custom Components ::
import Pills from "./Pills";
import Rating from "./Rating";

interface Props extends Restaurant {
	target: (node?: Element | null | undefined) => void;
	index: number;
	page: number;
}

const RestaurantCard = (data: Props) => {
	return (
		<Link
			to={`/restaurant/${data.name.split(" ").join("-")}?id=${
				data._id
			}&restaurantId=${data.restaurantId}`}
			ref={data.index === (data.page + 1) * 20 - 1 ? data.target : null}
			// data-card-id={data._id}
			// data-restaurant-id={data.restaurantId}
			// data-restaurant-name={data.name}
			className="flex flex-row gap-0 overflow-hidden rounded-lg group ring-1 ring-gray-200 md:flex-col hover:ring-primary/50 dark:bg-moredark dark:ring-moredark">
			<section className="relative w-[45%] overflow-hidden aspect-[3/4] md:w-full md:aspect-[3/2] transition">
				{/* Actual Image of Restaurant */}
				<img
					loading="lazy"
					src={MD_IMG_LINK + data.imageId}
					className="object-cover w-full h-full md:aspect-[3/2] group-hover:scale-110 transition dark:opacity-75"
					alt={data.imageId}
				/>
				{/* Placeholder image */}
				<div className="absolute inset-0 flex items-center justify-center object-cover -z-10 bg-black/20 dark:bg-white/10">
					<img
						className="grayscale h-[30%] aspect-square object-contain"
						src="/only-smile.png"
						alt="logo-skeleton-image"
					/>
				</div>
				<div className="absolute hidden top-2 left-2 md:flex">
					<Pills veg={data.veg} />
				</div>
				<div className="absolute flex items-center justify-start px-2 py-0.5 text-xs font-semibold shadow-lg bg-white rounded-tl-full rounded-bl-full uppercase -right-1 bottom-5 md:bottom-10 dark:bg-dark dark:text-lightwhite ">
					{`$${data.costForTwo} for Two`}
				</div>
			</section>
			<section className="flex flex-col flex-1 gap-2 p-3 bg-white md:p-2 xl:gap-3 xl:p-3 xl:pt-2 dark:bg-moredark dark:text-lightwhite">
				<div className="flex justify-start md:hidden">
					<Pills veg={data.veg} />
				</div>

				<div className="flex flex-col">
					<h3 className="font-semibold text-md md:text-lg">
						{data.name.substring(0, 30)}
					</h3>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-1">
							<p className="text-xs ">
								{data.cuisines.slice(0, 2).join(", ")}
								{data.cuisines.length > 2 && " & more..."}
							</p>
						</div>

						<div className="items-center hidden text-green-600 drop-shadow-sm md:flex">
							<Rating rating={data.rating} votes={data.votesString} />
						</div>
					</div>
				</div>
				<div className="flex items-center justify-start gap-1 text-green-600 drop-shadow-sm md:hidden">
					<Rating rating={data.rating} votes={data.votesString} />
				</div>

				<div className="flex flex-col gap-2 md:flex-row md:justify-between">
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
			</section>
		</Link>
	);
};

export default RestaurantCard;
/*
<div className="flex mt-2">
						<div
							className={`flex justify-start px-2 gap-1 text-white font-medium items-center h-[16px] rounded-full text-xs ${getBackgroundColor(
								3.5,
							)}`}>
							{data.rating}
							<MdStar />
							<PiDotOutlineFill />
							{data.votesString}
						</div>
					</div>
 */
