import { Dispatch, SetStateAction } from "react";

import { SortType } from "../../../types";
import { dropdownOptions } from "../../../utils/constants";
import { getSortingTitle } from "../../../utils/sorting";
import RadioButton from "../../common/RadioButton";
import FilterHeading from "./FilterHeading";
import { v4 } from "uuid";

interface Props {
	selectBoxValue: SortType;
	setSelectBoxValue: Dispatch<SetStateAction<SortType>>;
}

const Sort = (props: Props) => {
	return (
		<div>
			<FilterHeading title="Sort By" />
			<ul className="flex flex-col cursor-default w-max">
				{dropdownOptions.map((e) => (
					<li
						className="flex items-center justify-start gap-3 px-4 py-2 rounded cursor-pointer"
						onClick={() => props.setSelectBoxValue(e)}
						key={v4()}>
						<RadioButton active={props.selectBoxValue === e} />
						<p className="text-sm font-medium text-lightblack lg:text-base ">
							{getSortingTitle(e)}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sort;
