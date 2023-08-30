import { Dispatch, SetStateAction } from "react";

import { SortType } from "../../../types";
import { dropdownOptions } from "../../../utils/constants";
import { getSortingTitle } from "../../../utils/sorting";
import RadioButton from "../../common/RadioButton";
import FilterHeading from "./FilterHeading";

interface Props {
	selectBoxValue: SortType;
	setSelectBoxValue: Dispatch<SetStateAction<SortType>>;
}

const Sort = (props: Props) => {
	return (
		<div>
			<FilterHeading title="Sort By" />
			<ul className="flex w-max flex-col cursor-default">
				{dropdownOptions.map((e, index) => (
					<li
						className="flex items-center justify-start gap-3 py-2 px-4 rounded cursor-pointer"
						onClick={() => props.setSelectBoxValue(e)}
						key={"sort-item" + index}>
						<RadioButton active={props.selectBoxValue === e} />
						<p className="text-lightblack font-medium text-sm lg:text-base ">
							{getSortingTitle(e)}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sort;
