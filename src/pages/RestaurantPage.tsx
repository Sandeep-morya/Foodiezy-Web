import { useAppSelector } from "../hook/reduxHooks";
import { Navigate, useSearchParams } from "react-router-dom";
import withNavbar from "../hocs/withNavbar";
import useGetRestaurantData from "../hook/useGetRestaurantData";
import { useQuery } from "@apollo/client";
import { GET_RESTAURANT } from "../utils/resolvers";

const RestaurantPage = () => {
	const { serviceArea } = useAppSelector((store) => store.device);
	const [searchParams] = useSearchParams();

	const variables = { id: searchParams.get("id") };
	const args = {
		restaurantId: searchParams.get("restaurantId"),
		lat: serviceArea?.lat,
		lng: serviceArea?.lng,
	};

	const [isLoading, isError, menu] = useGetRestaurantData(args);
	const { loading, error, data } = useQuery(GET_RESTAURANT, { variables });

	if (!serviceArea || !serviceArea.lat || !serviceArea.lng) {
		return <Navigate to="/" />;
	}

	if (error || isError) {
		return <Navigate to="*" state={"503-Internal Server Error"} />;
	}

	if (loading && isLoading) {
		return <>Loading...</>;
	}

	console.log(data);
	console.log(menu);
	return <div>RestaurantPage</div>;
};

const Restaurant = withNavbar(RestaurantPage);
export default Restaurant;
