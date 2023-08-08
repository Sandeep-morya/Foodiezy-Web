import { ReactNode } from "react";
import NoficationCount from "./NotificationCount";
import { Link } from "react-router-dom";

interface Props {
	href: string;
	element: ReactNode;
	count?: number;
}
const IconButton = ({ href, element, count = 0 }: Props) => {
	return (
		<div className="relative">
			<Link to={href} className="text-2xl lg:text-3xl" target="_blank">
				{element}
			</Link>
			{count > 0 && <NoficationCount {...{ count }} />}
		</div>
	);
};

export default IconButton;
