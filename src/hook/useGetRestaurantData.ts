import { useState, useCallback, useEffect } from "react";
import { RESTAURANT_LINK } from "../utils/links";
import axios from "axios";

interface Args {
	restaurantId: string | null;
	lat?: number;
	lng?: number;
}

const useGetRestaurantData = (args: Args) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [data, setData] = useState([]);
	const { lat, lng, restaurantId } = args;

	const getRestaurantData = useCallback(
		async (lat: number, lng: number, restaurantId: string) => {
			setError(false);
			setLoading(true);
			try {
				const extraURL = `&lat=${lat}&lng=${lng}&restaurantId=${restaurantId}`;
				const { data } = await axios.get(RESTAURANT_LINK + extraURL);
				setData(data.data.cards.at(-1).groupedCard.cardGroupMap.REGULAR.cards);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				setError(true);
			}
		},
		[],
	);

	useEffect(() => {
		if (lat && lng && restaurantId) {
			getRestaurantData(lat, lng, restaurantId);
		}
	}, [restaurantId, lng, lat, getRestaurantData]);

	return [loading, error, data];
};

export default useGetRestaurantData;
