import { useEffect } from "react";
import { Navigate } from "react-router-dom";

// :: Apollo Client Imports ::
import { useQuery } from "@apollo/client";
import { GET_SERVICE_AREA_DATA } from "../graphql/resolvers";

// :: Redux Imports ::
import { useAppDispatch, useAppSelector } from "../hook/reduxHooks";
import { setServiceArea } from "../redux/slices/deviceSlice";
import { initRestorants } from "../redux/slices/restaurantSlice";
import { addInitialMenu } from "../redux/slices/menuSlice";

// :: Custom Components ::
import Collections from "../components/home/Collections";
import Footer from "../components/home/Footer";
import Restaurants from "../components/home/Restaurants";
import CollectionsLoader from "../components/home/Skeletons/CollectionsLoader";
import RestaurantsLoader from "../components/home/Skeletons/RestaurantsLoader";
import SearchBar from "../components/navbar/SearchBar";
import Bot from "../components/anandi/Bot";

// Higher-Order Component
import withNavbar from "../hocs/withNavbar";

const Homepage = () => {
	const { serviceArea } = useAppSelector((store) => store.device);
	const dispatch = useAppDispatch();

	const { loading, error, data } = useQuery(GET_SERVICE_AREA_DATA, {
		variables: { serviceAreaName: serviceArea?.name },
	});

	useEffect(() => {
		if (data && data.getServiceAreaData) {
			const { _id, name, lat, lng } = data.getServiceAreaData;
			dispatch(
				initRestorants({
					total: 0,
					restaurants: [],
					collections: data.getServiceAreaData.collections,
				}),
			);
			dispatch(addInitialMenu(null));
			dispatch(setServiceArea({ _id, name, lat, lng }));
		}
	}, [data, dispatch]);

	if (error) {
		return <Navigate to={"*"} />;
	}

	return (
		<main className="w-full">
			<article className="flex flex-col w-full p-1 gap-y-10 md:px-10 lg:px-4 xl:px-0 2xl:px-44 ">
				<div className="block w-full px-2 lg:hidden">
					<SearchBar />
				</div>
				<section role="collections">
					{loading ? (
						<CollectionsLoader />
					) : (
						<Collections data={data.getServiceAreaData.collections} />
					)}
				</section>
				<section role="restaurants">
					{loading || !serviceArea?._id ? (
						<RestaurantsLoader />
					) : (
						<Restaurants id={serviceArea._id} />
					)}
				</section>
			</article>

			<Bot />
			<footer>
				<Footer />
			</footer>
		</main>
	);
};

const Home = withNavbar(Homepage);
export default Home;
