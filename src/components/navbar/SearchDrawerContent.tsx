import { useState, useCallback, useEffect } from "react";
import { PiHamburger, PiMagnifyingGlass } from "react-icons/pi";

import Input from "../common/Input";
import { useLazyQuery } from "@apollo/client";
import useDebounce from "../../hook/useDebounce";
import { GET_RESTAURANTS } from "../../utils/resolvers";
import { Restaurant } from "../../types";
import SearchResultCard from "./SearchResultCard";
import { v4 } from "uuid";

interface Props {
	toggleDrawer: () => void;
	serviceAreaId?: string;
}

const SearchDrawerContent = ({ serviceAreaId }: Props) => {
	const [query, setQuery] = useState("");
	const debouncedQuery = useDebounce(query.trim(), 1000);
	const [count, setCount] = useState(0);
	const [totalCount, setTotalCount] = useState(0);
	const [restaurants, setRestaurestaurants] = useState<Restaurant[]>([]);
	// const [page] = useState(0);
	const [getRestaurants, { loading }] = useLazyQuery(GET_RESTAURANTS);

	const handleGetRestaurants = useCallback(
		async (page: number, queryParams: string, serviceAreaId: string) => {
			try {
				const { data } = await getRestaurants({
					variables: { page, queryParams, serviceAreaId, limit: 30 },
				});
				const count = data.getRestaurants.count;
				const totalCount = data.getRestaurants.totalCount;
				const restaurants = data.getRestaurants.documents;

				setTotalCount(totalCount);
				setCount(count);
				setRestaurestaurants(restaurants);
			} catch (error) {
				console.log({ error });
			}
		},
		[getRestaurants],
	);

	useEffect(() => {
		if (debouncedQuery && serviceAreaId) {
			handleGetRestaurants(0, debouncedQuery, serviceAreaId);
		}
	}, [debouncedQuery, serviceAreaId, handleGetRestaurants]);

	return (
		<div className="px-2 relative w-full h-full overflow-y-scroll small-scroll-bar ">
			{loading && (
				<div className="absolute z-20 top-0 left-0 w-full h-full center">
					<img
						className="w-[60px] animate-spin grayscale"
						src="/only-smile.png"
						alt=""
					/>
				</div>
			)}
			<div className="sticky top-0 z-10 px-2 py-4 bg-white">
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

			{restaurants.length > 0 && (
				<div className="mt-2">
					<p className="py-2 text-black/50 font-medium">
						Showing {count} of {totalCount} results
					</p>

					<div className="grid p-2 gap-4">
						{restaurants.map((restaurant) => (
							<SearchResultCard key={v4()} {...restaurant} />
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default SearchDrawerContent;
