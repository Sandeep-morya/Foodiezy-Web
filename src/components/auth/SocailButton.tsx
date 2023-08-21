import { FC } from "react";

interface Props {
	icon: React.ReactNode;
	onClick?: () => void;
	title: string;
}
const SocailButton: FC<Props> = ({ icon, title, onClick }) => {
	return (
		<button
			className="h-12 px-6 transition duration-300 border rounded-full bg-black/5 group hover:bg-black/10 active:scale-95"
			onClick={onClick}>
			<div className="relative flex items-center justify-center space-x-4">
				{icon}
				<span className="block text-sm font-bold tracking-wide transition duration-300 text-lightblack w-max group-hover:text-black sm:text-base">
					{title}
				</span>
			</div>
		</button>
	);
};

export default SocailButton;
