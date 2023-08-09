// import { useCallback, useEffect } from "react";
// import WithNavbar from "../provider/WithNavbar";
import { useQuery } from "@apollo/client";
import { GET_SERVICE_AREA_DATA } from "../utils/resolvers";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Restaurants from "../components/home/Restaurants";
import Collections from "../components/home/Collections";
import withNavbar from "../hocs/withNavbar";
import Footer from "../components/home/Footer";
import SearchBar from "../components/navbar/SearchBar";

const Homepage = () => {
	const { serviceAreaName } = useParams();
	const { loading, data } = useQuery(GET_SERVICE_AREA_DATA, {
		variables: { serviceAreaName },
	});

	console.log({ loading, data });
	if (loading) {
		return <HashLoader size={30} />;
	}

	return (
		<div className="w-full">
			<div className="flex flex-col w-full p-1 gap-y-10 md:px-10 lg:px-4 2xl:px-44">
				<div className="block w-full px-2 lg:hidden">
					<SearchBar />
				</div>
				<Collections data={data.getServiceAreaData.collections} />
				<Restaurants data={data.getServiceAreaData.restaurants} />
			</div>
			<Footer />
		</div>
	);
};

const Home = withNavbar(Homepage);
export default Home;
