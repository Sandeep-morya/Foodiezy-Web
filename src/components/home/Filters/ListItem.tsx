import { FC, useState } from "react";
import CheckBox from "../../common/CheckBox";

const ListItem: FC<{ title: string }> = ({ title }) => {
	const [checked, setChecked] = useState(false);
	return (
		<div
			className="py-3 px-4 flex gap-2 select-none text-black/70 items-center text-sm lg:text-base font-medium hover:bg-black/5 rounded-tl-full rounded-bl-full"
			onClick={() => setChecked(true)}>
			<CheckBox
				checked={checked}
				onChange={(e) => setChecked(e.target.checked)}
			/>
			<p className={checked ? "line-through" : ""}>{title}</p>
		</div>
	);
};

export default ListItem;
