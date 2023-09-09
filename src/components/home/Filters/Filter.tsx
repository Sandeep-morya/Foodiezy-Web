import { Dispatch, FC, SetStateAction } from "react";

import FilterHeading from "./FilterHeading";
import ListItem from "./ListItem";
import { v4 } from "uuid";

interface Props {
	heading: string;
	array: string[];
	value: string[];
	setValue: Dispatch<SetStateAction<string[]>>;
}

const Filter: FC<Props> = ({ heading, array, value, setValue }: Props) => {
	return (
		<div>
			<FilterHeading title={heading} />
			{array.map((title) => (
				<ListItem
					key={v4()}
					title={title}
					callback={setValue}
					defaultValue={value.includes(title)}
				/>
			))}
		</div>
	);
};

export default Filter;
