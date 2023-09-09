import { ORIGINAL_IMG_LINK } from "../../utils/links";
import { Restaurant } from "../../types";
import { MdDeliveryDining, MdStar } from "react-icons/md";
import Pill from "../common/Pill";
import { v4 } from "uuid";

const RestrautantFaceCard = (data: Restaurant) => {
	return (
		<section className="w-full h-[200px] min-h-[200px] relative rounded-lg border overflow-hidden shadow-xl ">
			<img
				className="w-[100%] h-[100%] object-cover"
				src={ORIGINAL_IMG_LINK + data.imageId}
				alt=""
			/>

			<div
				style={{
					background: "linear-gradient(to right, #fffc 60%, transparent)",
				}}
				className="absolute inset-0 flex flex-col p-2">
				<div className="p-2 text-lightblack ">
					<h1 className="text-xl font-medium uppercase char-shadow">
						{data.name}
					</h1>
					<p className="text-sm font-medium tracking-wide char-shadow">
						{data.areaName + ", " + data.locality}
					</p>
				</div>
				<div className="flex items-center justify-between px-2">
					<div className="flex items-center gap-2 text-lg font-medium text-lightblack">
						<MdDeliveryDining />
						<p>{data.delivery.duration}</p>
					</div>

					<div className="flex flex-col items-center p-2 overflow-hidden text-xs font-medium text-white divide-y rounded backdrop-blur-sm bg-black/30">
						<div className="flex items-center gap-1">
							<p>{data.rating}</p>
							<MdStar />
						</div>
						<p>{data.votesString}</p>
					</div>
				</div>
				<div className="flex gap-2 pt-4 my-2 border-t border-dashed border-lightblack">
					{data.cuisines.map((title: string) => (
						<Pill key={v4()} title={title} color="bg-primary" />
					))}
				</div>
			</div>
		</section>
	);
};

export default RestrautantFaceCard;
