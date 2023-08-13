import { useEffect } from 'react';

import { useQuery } from '@apollo/client';

import Collections from '../components/home/Collections';
import Footer from '../components/home/Footer';
import Restaurants from '../components/home/Restaurants';
import CollectionsLoader from '../components/home/Skeletons/CollectionsLoader';
import RestaurantsLoader from '../components/home/Skeletons/RestaurantsLoader';
import SearchBar from '../components/navbar/SearchBar';
import withNavbar from '../hocs/withNavbar';
import { useAppDispatch, useAppSelector } from '../hook/reduxHooks';
import { setServiceArea } from '../redux/deviceSlice';
import { initRestorants } from '../redux/restaurantSlice';
import { GET_SERVICE_AREA_DATA } from '../utils/resolvers';

const Homepage = () => {
	const { serviceArea } = useAppSelector((store) => store.device);
	const dispatch = useAppDispatch();

	const { loading, data } = useQuery(GET_SERVICE_AREA_DATA, {
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
			dispatch(setServiceArea({ _id, name, lat, lng }));
		}
	}, [data, dispatch]);

	return (
		<div className="w-full">
			<div className="flex flex-col w-full p-1 gap-y-10 md:px-10 lg:px-4 xl:px-0 2xl:px-44">
				<div className="block w-full px-2 lg:hidden">
					<SearchBar />
				</div>
				{loading ? (
					<CollectionsLoader />
				) : (
					<Collections data={data.getServiceAreaData.collections} />
				)}

				{loading || !serviceArea?._id ? (
					<RestaurantsLoader />
				) : (
					<Restaurants id={serviceArea._id} />
				)}
			</div>
			<Footer />
		</div>
	);
};

const Home = withNavbar(Homepage);
export default Home;
