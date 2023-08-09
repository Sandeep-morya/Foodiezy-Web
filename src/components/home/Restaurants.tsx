import { useState, useEffect, useCallback } from "react";
import RestaurantCard from "./RestaurantCard";
import FilterSection from "./FilterSection";
import { useInView } from "react-intersection-observer";
import { useLazyQuery } from "@apollo/client";
import { GET_RESTAURANTS } from "../../utils/resolvers";
import { BarLoader } from "react-spinners";
import { useAppDispatch, useAppSelector } from "../../hook/reduxHooks";
import { addRestaurants, initRestorants } from "../../redux/restaurantSlice";

const Restaurants = ({ id }: { id: string }) => {
	console.log({ id });
	const { inView, ref } = useInView();
	const { ref: target, inView: LastItemInView } = useInView({ threshold: 0.7 });
	const [page, setPage] = useState(0);
	const dispatch = useAppDispatch();

	const [getRestaurants, { loading }] = useLazyQuery(GET_RESTAURANTS);

	const handleGetRestaurants = useCallback(
		async (page: number) => {
			try {
				const { data } = await getRestaurants({
					variables: { page, serviceAreaId: id },
				});
				console.log("API called for page:", data.getRestaurants.page);
				const total = data.getRestaurants.totalCount;
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
		[getRestaurants, id, dispatch],
	);

	useEffect(() => {
		handleGetRestaurants(page);
	}, [page, handleGetRestaurants]);

	useEffect(() => {
		if (LastItemInView) {
			console.log({ LastItemInView });
			setPage((page) => page + 1);
		}
	}, [LastItemInView]);

	const { total, restaurants } = useAppSelector((store) => store.restaurants);

	if (loading) {
		return <BarLoader />;
	}

	return (
		<div className="flex flex-col px-2 gap-y-2 md:px-4">
			<h1
				ref={ref}
				className="text-lg font-semibold tracking-wide md:text-xl xl:text-2xl">
				Restaurants near you {`(${total})`}
			</h1>
			<FilterSection atTop={!inView} />
			{/*---:: Restaurant Cards ::---*/}
			<div className="grid grid-cols-1 gap-6 px-1 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 2xl:gap-8">
				{restaurants.map((restaurant, index) => (
					<RestaurantCard
						key={restaurant._id}
						{...{ target, index, page }}
						{...restaurant}
					/>
				))}
			</div>
		</div>
	);
};

export default Restaurants;
