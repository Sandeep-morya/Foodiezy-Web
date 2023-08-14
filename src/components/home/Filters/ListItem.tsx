import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

import CheckBox from "../../common/CheckBox";

interface Props {
	title: string;
	defaultValue: boolean;
	callback: Dispatch<SetStateAction<string[]>>;
}

const ListItem: FC<Props> = ({ title, defaultValue, callback }) => {
	const [checked, setChecked] = useState(defaultValue || false);
	useEffect(() => {
		callback((prev) => {
			if (checked) {
				if (!prev.includes(title)) {
					return [...prev, title];
				} else {
					return prev;
				}
			} else {
				return prev.filter((item) => item !== title);
			}
		});
	}, [checked, title, callback]);
	return (
		<div
			className="py-3 px-4 flex gap-2 select-none text-lightblack items-center text-sm lg:text-base font-medium hover:bg-black/5 rounded-tl-full rounded-bl-full"
			onClick={() => setChecked(true)}>
			<CheckBox
				checked={checked}
				onChange={(e) => setChecked(e.target.checked)}
			/>
			<p>{title}</p>
		</div>
	);
};

export default ListItem;
