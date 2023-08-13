import { Dispatch, FC, SetStateAction } from 'react';

import FilterHeading from './FilterHeading';
import ListItem from './ListItem';

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
			{array.map((title, index) => (
				<ListItem
					key={title + index + heading}
					title={title}
					callback={setValue}
					defaultValue={value.includes(title)}
				/>
			))}
		</div>
	);
};

export default Filter;
