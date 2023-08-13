import { useState } from 'react';
import { PiHamburger, PiMagnifyingGlass } from 'react-icons/pi';

import Input from '../common/Input';

interface Props {
	toggleDrawer: () => void;
}

const SearchDrawerContent = (props: Props) => {
	console.log(props);
	const [query, setQuery] = useState("");

	return (
		<div className="p-2">
			<Input
				leftIcon={
					// <img
					// 	className="w-[20px] brightness-0"
					// 	src="only-smile.png"
					// 	alt="only-smile-image"
					// />
					<PiHamburger size={20} />
				}
				placeholder="Taste cravings? Start here..."
				rightIcon={<PiMagnifyingGlass />}
				value={query}
				onKeyDownCapture={(e) => console.log(e)}
				onChange={(e) => setQuery(e.target.value.trim())}
			/>
		</div>
	);
};

export default SearchDrawerContent;
