import { MdDeliveryDining, MdLocationPin, MdStar } from "react-icons/md";
import type { Restaurant } from "../../types";
import Pill from "../common/Pill";
import { PiDotOutlineFill, PiPath } from "react-icons/pi";
import { FC } from "react";

const Pills: FC<{ veg: boolean }> = ({ veg }) => {
	return veg ? (
		<Pill title="pure-veg" color={"bg-primary"} />
	) : (
		<div className="flex gap-2">
			<Pill title="veg" color={"bg-primary"} />
			<Pill title="non-veg" color={"bg-red-500"} />
		</div>
	);
};

const Rating: FC<{ rating: number; votes: string }> = ({ rating, votes }) => {
	return (
		<>
			<MdStar />
			<p className="ml-1 text-xs md:text-sm">{rating}</p>
			<PiDotOutlineFill />
			<p className="text-xs md:text-sm">{votes}</p>
		</>
	);
};

const RestaurantCard = (data: Restaurant) => {
	return (
		<div className="flex flex-row  gap-0 rounded-lg overflow-hidden shadow-[0_0_2px_#0009] md:flex-col transition-all">
			<div className="relative w-[45%] overflow-hidden aspect-[3/4] md:w-full md:aspect-[3/2]">
				<img
					loading="lazy"
					src={`https://res.cloudinary.com/swiggy/image/upload/${data.imageId}`}
					className="object-cover w-full h-full md:aspect-[3/2] hover:scale-110 transition-all"
					alt={data.imageId}
				/>
				<div className="absolute hidden top-2 left-2 md:flex">
					<Pills veg={data.veg} />
				</div>
				<div className="absolute flex items-center justify-start px-2 py-0.5 text-xs font-semibold shadow-lg bg-white rounded-tl-full rounded-bl-full uppercase -right-1 bottom-5 md:text-sm">
					{data.discount || data.costForTwo}
				</div>
			</div>
			<div className="flex flex-col flex-1 gap-2 p-3 bg-white md:p-2 xl:gap-3 xl:p-3 xl:pt-2">
				<div className="flex justify-start md:hidden">
					<Pills veg={data.veg} />
				</div>

				<div className="flex flex-col">
					<h3 className="font-semibold text-md md:text-lg">
						{data.name.substring(0, 30)}
					</h3>
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<p className="text-xs md:text-sm">{data.cuisines[0]} </p>
							<PiDotOutlineFill />
							<p className="text-xs md:text-sm">
								{data.cuisines[data.cuisines.length - 1]}{" "}
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
						<p className="text-xs md:text-sm">
							{data.locality.substring(0, 15) || data.areaName}
						</p>
					</div>
					<div className="flex items-center justify-start gap-2 md:gap-1">
						<MdDeliveryDining />
						<p className="text-xs md:text-sm">{data.delivery.duration}</p>
					</div>
					<div className="flex items-center justify-start gap-2 md:gap-1">
						<PiPath />
						<p className="text-xs md:text-sm">{data.delivery.distance}</p>
					</div>
				</div>
			</div>
		</div>
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
/*
 */
