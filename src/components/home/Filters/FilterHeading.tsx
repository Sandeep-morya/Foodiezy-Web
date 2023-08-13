import { FC } from 'react';

const FilterHeading: FC<{ title: string }> = ({ title }) => {
	return (
		<h1 className="text-sm uppercase tracking-wider font-semibold underline p-4 md:text-base">
			{title}
		</h1>
	);
};

export default FilterHeading;
