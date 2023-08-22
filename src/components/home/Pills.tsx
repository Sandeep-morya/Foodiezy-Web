import { FC } from "react";
import Pill from "../common/Pill";

const Pills: FC<{ veg: boolean }> = ({ veg }) => {
	return veg ? (
		<Pill title="pure-veg" color={"bg-teal-400"} />
	) : (
		<div className="flex gap-2">
			<Pill title="veg" color={"bg-primary"} />
			<Pill title="non-veg" color={"bg-red-500"} />
		</div>
	);
};

export default Pills;
