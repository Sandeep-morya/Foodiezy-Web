import { Dispatch, SetStateAction } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

interface Props {
	count: number;
	setCount: Dispatch<SetStateAction<number>>;
}
const Counter = ({ count, setCount }: Props) => {
	return (
		<div
			aria-labelledby="counter"
			className="flex-1 w-full h-full flex items-center gap-1">
			<button
				className="h-full aspect-square flex justify-center items-center rounded-full bg-white/30 active:bg-primary/70 hover:opacity-70 active:scale-90 text-2xl text-secondary"
				onClick={() => setCount((e) => e - 1)}>
				<MdRemove />
			</button>
			<span className="h-full aspect-square flex justify-center items-center font-semibold text-secondary ">
				{count}
			</span>
			<button
				className="h-full aspect-square flex justify-center items-center rounded-full bg-white/30 active:bg-primary/70 hover:opacity-70 active:scale-90 text-2xl text-secondary"
				onClick={() => setCount((e) => e + 1)}>
				<MdAdd />
			</button>
		</div>
	);
};

export default Counter;
