// import { useCallback, useEffect } from "react";
// import WithNavbar from "../provider/WithNavbar";
import { useQuery } from "@apollo/client";
import { GET_SERVICE_AREA_DATA } from "../utils/resolvers";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Restaurants from "../components/home/Restaurants";
import Collections from "../components/home/Collections";

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
		<div className="flex flex-col w-full p-1">
			<Collections data={data.getServiceAreaData.collections} />
			<Restaurants data={data.getServiceAreaData.restaurants} />
		</div>
	);
};

export default Homepage;
