import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { v4 } from "uuid";

// :: Redux Imports ::
import {
	addRestaurants,
	initRestorants,
} from "../../redux/slices/restaurantSlice";

// :: Apollo Client Imports ::
import { useLazyQuery } from "@apollo/client";
import { GET_RESTAURANTS } from "../../graphql/resolvers";

// :: Custom Hooks and Utilites Imports ::
import { useAppDispatch, useAppSelector } from "../../hook/reduxHooks";

// :: Custom Components ::
import FilterSortSection from "./FilterSortSection";
import RestaurantCard from "./RestaurantCard";
import RestaurantCardSkeletion from "./Skeletons/RestaurantCardSkeletion";

interface Props {
	id: string;
}

const Restaurants = ({ id }: Props) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [queryParams, setQueryParams] = useState(searchParams.toString());
	const [modified, setModified] = useState(false);

	const { inView, ref } = useInView();
	const { ref: target, inView: LastItemInView } = useInView({ threshold: 0.7 });
	const [page, setPage] = useState(0);
	const dispatch = useAppDispatch();

	const [getRestaurants, { loading }] = useLazyQuery(GET_RESTAURANTS);

	const handleGetRestaurants = useCallback(
		async (page: number) => {
			try {
				const { data } = await getRestaurants({
					variables: { page, queryParams, serviceAreaId: id },
				});

				const total = data.getRestaurants.totalCount;
				const modified = data.getRestaurants.modified;
				setModified(modified);
				const restaurants = data.getRestaurants.documents;
				if (page === 0) {
					dispatch(initRestorants({ total, restaurants }));
				} else {
					dispatch(addRestaurants(restaurants));
				}
			} catch (error) {
				console.log({ error });
			}
		},
		[getRestaurants, id, dispatch, queryParams],
	);

	useEffect(() => {
		handleGetRestaurants(page);
	}, [page, handleGetRestaurants]);

	const { total, restaurants } = useAppSelector((store) => store.restaurants);

	useEffect(() => {
		if (LastItemInView) {
			setPage((page) => page + 1);
		}
	}, [LastItemInView, total]);

	return (
		<article className="flex flex-col px-2 gap-y-2 md:px-4">
			<h1
				ref={ref}
				className="text-lg font-semibold tracking-wide md:text-xl xl:text-2xl dark:text-lightwhite">
				Restaurants near you {`(${total})`}
			</h1>

			<FilterSortSection
				atTop={!inView}
				modified={modified}
				{...{ total, searchParams, setSearchParams, setQueryParams }}
			/>

			{/*---:: Restaurant Cards ::---*/}
			<section
				aria-labelledby="restaurants"
				className="grid grid-cols-1 gap-6 px-1 mt-8 transition md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 2xl:gap-8">
				{restaurants.map((restaurant, index) => (
					<RestaurantCard
						key={restaurant._id}
						{...{ target, index, page }}
						{...restaurant}
					/>
				))}
				{loading &&
					Array.from({ length: 16 }).map(() => (
						<RestaurantCardSkeletion key={v4()} />
					))}
			</section>
		</article>
	);
};

export default Restaurants;
