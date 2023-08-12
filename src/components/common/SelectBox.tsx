import { Dispatch, SetStateAction, useCallback, useRef, useState } from "react";
import { getSortingTitle } from "../../utils/sorting";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface Props<T> {
	value: T;
	setValue: Dispatch<SetStateAction<T>>;
}

const SelectBox = <T extends string>({ value, setValue }: Props<T>) => {
	const [active, setActive] = useState(false);
	const [hover, setHover] = useState(false);
	const [hover2, setHover2] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const handleSelect = useCallback(
		(e: T) => {
			setValue(e);
			inputRef.current?.blur();
			setTimeout(() => {
				setActive(false);
			}, 200);
		},
		[setValue],
	);
	return (
		<div className="absolute top-0 left-0 h-full w-full ">
			<input
				className="absolute caret-transparent top-0 left-0 w-full h-full z-10 outline-none opacity-0"
				onFocus={() => setActive(true)}
				onBlur={() => setActive(hover || hover2 ? true : false)}
				ref={inputRef}
				type="text"
			/>
			<div
				onClick={() => (!active ? inputRef.current?.focus() : setActive(false))}
				onMouseOver={() => setHover2(true)}
				onMouseLeave={() => setHover2(false)}
				className={`absolute ${
					value !== "default" && "bg-primary/30"
				} p-2 top-0 left-0 z-20 border w-full h-full flex justify-between text-black/50 items-center rounded-full md:px-3`}>
				<p className="text-xs md:text-sm">{getSortingTitle(value as T)}</p>
				<div className={`${active ? "rotate-180" : "rotate-0"} transition-all`}>
					<MdOutlineKeyboardArrowDown size={20} />
				</div>
			</div>

			{active && (
				<div
					onMouseOver={() => {
						setHover(true);
						inputRef.current?.focus();
					}}
					onMouseLeave={() => {
						setHover(false);
					}}
					className="absolute z-30 top-12 left-0 w-[160px] lg:w-[180px] p-2 bg-white ring-1 ring-black/5 rounded-xl flex flex-col  shadow-md">
					{["default", "title", "rating", "h2l", "l2h"].map((e, index) => (
						<div
							className="flex p-2 justify-between items-center hover:bg-black/10 rounded"
							onClick={() => handleSelect(e as T)}
							key={"sort-item" + index}>
							<p className="text-xs lg:text-sm text-black/50">
								{getSortingTitle(e as T)}
							</p>
							<input
								type="radio"
								className="accent-primary active:scale-75"
								checked={value === e}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default SelectBox;
