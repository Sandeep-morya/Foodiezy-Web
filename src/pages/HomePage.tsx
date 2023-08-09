import { useQuery } from "@apollo/client";
import { GET_SERVICE_AREA_DATA } from "../utils/resolvers";
import { HashLoader } from "react-spinners";
import Restaurants from "../components/home/Restaurants";
import Collections from "../components/home/Collections";
import withNavbar from "../hocs/withNavbar";
import Footer from "../components/home/Footer";
import SearchBar from "../components/navbar/SearchBar";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hook/reduxHooks";
import { setServiceArea } from "../redux/deviceSlice";

const Homepage = () => {
	const { serviceArea } = useAppSelector((store) => store.device);
	const dispatch = useAppDispatch();

	const { loading, data } = useQuery(GET_SERVICE_AREA_DATA, {
		variables: { serviceAreaName: serviceArea?.name },
	});

	useEffect(() => {
		if (data && data.getServiceAreaData) {
			const { _id, name, lat, lng } = data.getServiceAreaData;
			dispatch(setServiceArea({ _id, name, lat, lng }));
		}
	}, [data, dispatch]);

	if (loading) {
		return <HashLoader size={30} />;
	}

	return (
		<div className="w-full">
			<div className="flex flex-col w-full p-1 gap-y-10 md:px-10 lg:px-4 xl:px-0 2xl:px-44">
				<div className="block w-full px-2 lg:hidden">
					<SearchBar />
				</div>
				<Collections data={data.getServiceAreaData.collections} />
				{serviceArea?._id && <Restaurants id={serviceArea._id} />}
			</div>
			<Footer />
		</div>
	);
};

const Home = withNavbar(Homepage);
export default Home;
