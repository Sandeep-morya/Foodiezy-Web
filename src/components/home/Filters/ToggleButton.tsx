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
		<div
			onClick={() => setChecked((e) => !e)}
			className={`flex justify-start max-w-max items-center gap-2 px-2 py-1.5 border rounded-full  hover:cursor-pointer md:px-3 xl:py-2 hover:shadow ${
				checked && "bg-primary/25"
			}`}>
			<p className="text-xs text-black/50 md:text-sm">{title}</p>

			{checked && (
				<div className="text-black/90">
					<MdClose />
				</div>
			)}
		</div>
	);
};

export default ToggleButton;
