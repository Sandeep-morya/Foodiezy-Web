import { FC } from "react";

interface Props {
	title: string;
	onClick?: () => void;
	link?: boolean;
}

const ListItem: FC<Props> = ({ title, onClick, link }) => {
	return (
		<li
			onClick={onClick}
			className={`px-2 cursor-default font-medium py-0.5 text-sm border rounded-full bg-primary/30 text-lightblack shadow-sm hover:bg-primary/50 ${
				link && "hover:underline"
			} transition  active:scale-90`}>
			{title}
		</li>
	);
};

export default ListItem;
