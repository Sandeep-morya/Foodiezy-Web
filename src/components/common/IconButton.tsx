import { ReactNode } from "react";
import NoficationCount from "./NoficationCount";

interface Props {
	href: string;
	element: ReactNode;
	count?: number;
}
const IconButton = ({ href, element, count = 0 }: Props) => {
	return (
		<div className="relative">
			<a href={href} className="text-2xl lg:text-3xl" target="_blank">
				{element}
			</a>
			{count > 0 && <NoficationCount {...{ count }} />}
		</div>
	);
};

export default IconButton;
