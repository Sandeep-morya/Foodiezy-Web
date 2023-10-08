import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

import CheckBox from "../../common/CheckBox";

interface Props {
	title: string;
	defaultValue: boolean;
	callback: Dispatch<SetStateAction<string[]>>;
}

const ListItem: FC<Props> = ({ title, defaultValue, callback }) => {
	const [checked, setChecked] = useState(defaultValue);
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
	}, [checked, title,callback]);

	useEffect(() => {
		setChecked(defaultValue);
	}, [defaultValue]);
	return (
		<div
			className="flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-tl-full rounded-bl-full select-none text-lightblack lg:text-base hover:bg-black/5"
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
