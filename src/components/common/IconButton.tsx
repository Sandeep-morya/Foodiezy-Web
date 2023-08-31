import { ReactNode } from "react";
import { Link } from "react-router-dom";

import NoficationCount from "./NotificationCount";

interface Props {
	href?: string;
	element: ReactNode;
	count?: number;
	asButton?: boolean;
	onClick?: () => void;
}
const IconButton = ({
	href = "#",
	element,
	count = 0,
	asButton,
	onClick,
}: Props) => {
	return (
		<div className="relative">
			{asButton ? (
				<button
					onClick={onClick}
					className="w-[24px] aspect-square lg:w-[28px] text-2xl lg:text-3xl active:scale-90 hover:text-primary">
					{element}
				</button>
			) : (
				<Link
					to={href}
					className="text-2xl lg:text-3xl hover:text-primary"
					target="_blank">
					{element}
				</Link>
			)}
			{count > 0 && <NoficationCount {...{ count }} />}
		</div>
	);
};

export default IconButton;
