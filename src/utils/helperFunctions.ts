export const getBackgroundColor = (rating: number) => {
	if (rating < 3.6) {
		return "bg-orange-500";
	} else if (rating < 3.9) {
		return "bg-green-500";
	} else if (rating < 4.3) {
		return "bg-green-700";
	} else {
		return "bg-green-900";
	}
};
