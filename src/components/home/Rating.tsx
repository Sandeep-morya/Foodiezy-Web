import { MdStar } from "react-icons/md";
import { PiDotOutlineFill } from "react-icons/pi";
import { FC } from "react";

const Rating: FC<{ rating: number; votes: string }> = ({ rating, votes }) => {
	return (
		<>
			<MdStar />
			<p className="ml-1 text-xs font-medium md:text-sm">{rating}</p>
			<PiDotOutlineFill />
			<p className="text-xs font-medium md:text-sm">{votes}</p>
		</>
	);
};

export default Rating;
