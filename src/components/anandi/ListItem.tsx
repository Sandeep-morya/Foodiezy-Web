import { FC } from "react";

interface Props {
	title: string;
	onClick?: () => void;
}

const ListItem: FC<Props> = ({ title, onClick }) => {
	return (
		<li
			onClick={onClick}
			className="px-2 cursor-default py-0.5 text-sm border rounded bg-lightblack text-secondary shadow-sm transition hover:bg-black active:scale-90">
			{title}
		</li>
	);
};

export default ListItem;
