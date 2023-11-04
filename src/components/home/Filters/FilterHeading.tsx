import { FC } from 'react';

const FilterHeading: FC<{ title: string }> = ({ title }) => {
	return (
		<h1 className="p-4 text-sm font-semibold tracking-wider underline uppercase md:text-base dark:text-lightwhite">
			{title}
		</h1>
	);
};

export default FilterHeading;
