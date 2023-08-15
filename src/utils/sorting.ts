import { ParamsObject, Restaurant } from "../types";

export const getSortingTitle = <T>(title: T) => {
	switch (title) {
		case "title":
			return "Sort by Name";
		case "rating":
			return "Sort by Rating";
		case "h2l":
			return "Cost: High to Low";
		case "l2h":
			return "Cost: Low to High";
		case "delivery":
			return "Fast Delivery";
		default:
			return "Relevance (Default)";
	}
};

export const sortByRating = (a: Restaurant, b: Restaurant) => {
	return b.rating - a.rating;
};

// export const sortByTitle = (a: Restaurant, b: Restaurant) => {}

export const sortByTitle = (a: Restaurant, b: Restaurant) => {
	const nameA = a.name.toUpperCase();
	const nameB = b.name.toUpperCase();
	return nameA > nameB ? 1 : nameA < nameB ? -1 : 0;
};

export const sortByDelivery = (a: Restaurant, b: Restaurant) => {
	const timeA = +a.delivery.duration.split(" ")[0];
	const timeB = +b.delivery.duration.split(" ")[0];
	return timeA - timeB;
};

export const sortByCostH2L = (a: Restaurant, b: Restaurant) => {
	const priceA = +a.costForTwo.split(" ")[0].substring(1);
	const priceB = +b.costForTwo.split(" ")[0].substring(1);
	return priceB - priceA;
};
export const sortByCostL2H = (a: Restaurant, b: Restaurant) => {
	const priceA = +a.costForTwo.split(" ")[0].substring(1);
	const priceB = +b.costForTwo.split(" ")[0].substring(1);
	return priceA - priceB;
};

// :: Managing Parmas view in url ::
export const cleanParams = (paramsObject: ParamsObject) => {
	const newParamsObject = { ...paramsObject };
	if (!newParamsObject.sortby) {
		delete newParamsObject.sortby;
	}
	return newParamsObject;
};
