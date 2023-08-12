﻿import {
	useState,
	useRef,
	useEffect,
	Dispatch,
	SetStateAction,
	useCallback,
} from "react";
import { getSortingTitle } from "../../utils/sorting";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import RadioButton from "./RadioButton";

interface DropdownProps<T> {
	options: T[];
	value: T;
	setValue: Dispatch<SetStateAction<T>>;
	radio?: boolean;
}

const Dropdown = <T extends string>({
	options,
	value,
	setValue,
	radio,
}: DropdownProps<T>) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const handleSelect = useCallback(
		(e: T) => {
			setValue(e);
			setTimeout(() => setIsOpen((e) => !e), 200);
		},
		[setIsOpen, setValue],
	);

	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="relative" ref={dropdownRef}>
			<button
				className={`flex justify-start items-center gap-2 px-2 py-1.5 border rounded-full text-black/50 hover:cursor-pointer md:px-3 xl:py-2 hover:shadow transition-all duration-500 ${
					value !== options[0] && "bg-primary/25"
				}`}
				onClick={() => setIsOpen((e) => !e)}>
				<p className="text-xs md:text-sm">{getSortingTitle(value as T)}</p>
				<div className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all`}>
					<MdOutlineKeyboardArrowDown size={20} />
				</div>
			</button>
			{isOpen && (
				<ul className="absolute top-12 left-0 w-[160px] lg:w-[180px] p-2 bg-white ring-1 ring-black/5 rounded-xl flex flex-col  shadow-md cursor-default">
					{options.map((e, index) => (
						<li
							className="flex items-center justify-between p-2 rounded cursor-pointer active:scale-95 hover:bg-black/10"
							onClick={() => handleSelect(e as T)}
							key={"sort-item" + index}>
							<p className="text-xs lg:text-sm text-black/50">
								{getSortingTitle(e as T)}
							</p>
							{!radio && <RadioButton active={value === e} />}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;