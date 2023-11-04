import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

interface Props {
	title: string;
	defaultValue: boolean;
	callback: Dispatch<SetStateAction<string[]>>;
}
const ToggleButton: FC<Props> = ({ title, defaultValue, callback }) => {
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
	}, [checked, title, callback]);

	useEffect(() => {
		setChecked(defaultValue);
	}, [defaultValue]);
	return (
		<button
			onClick={() => setChecked((e) => (!e ? true : e))}
			className={`flex justify-start max-w-max items-center gap-2 px-2 py-1.5 border rounded-full hover:cursor-pointer text-sm text-lightblack 2xl:text-base md:px-3 xl:py-2 hover:shadow ${
				checked && "bg-primary/25 dark:bg-primary/75 "
			} dark:bg-moredark dark:border-moredark dark:text-lightwhite`}>
			<p>{title}</p>

			{checked && (
				<div>
					<MdClose />
				</div>
			)}
		</button>
	);
};

export default ToggleButton;
