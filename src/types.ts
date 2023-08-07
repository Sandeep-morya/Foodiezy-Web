export type Theme = "light" | "dark";

export interface Coordinates {
	lat: string | number;
	lng: string | number;
}
export interface GeoLocation {
	coordinates: Coordinates;
	display_name: string;
	address: Address;
}
export interface Device {
	theme: Theme;
	geo_location: GeoLocation | null;
}

export interface MapLocations {
	place_id: number;
	licence: string;
	powered_by: string;
	osm_type: string;
	osm_id: number;
	boundingbox: string[];
	lat: string;
	lon: string;
	display_name: string;
	class: string;
	type: string;
	importance: number;
}

export interface CoordinatesResult {
	place_id: number;
	licence: string;
	powered_by: string;
	osm_type: string;
	osm_id: number;
	lat: string;
	lon: string;
	display_name: string;
	address: Address;
	boundingbox: string[];
}

export interface Address {
	city: string;
	county: string;
	state_district: string;
	state: string;
	postcode: string;
	country: string;
	country_code: string;
}
export interface CardAction {
	clickActionDeeplink: string;
	clickUrl: string;
}

export interface RestorantLocality {
	name: string;
	address: string;
}
export interface RestorantRating {
	text: string;
	votes: string;
	color: string;
	subtite: string;
}

export interface RestorantInfo {
	resId: number;
	costText: { text: string };
	image: { url: string };
	locality: RestorantLocality;
	name: string;
	rating: RestorantRating;
}

export interface RestorantOrder {
	deliveryTime: string;
	isServiceable: true;
	hasOnlineOrdering: true;
	actionInfo: {
		text: string;
		clickUrl: string;
	};
}

export interface Restorant {
	cardAction: CardAction;
	distance: string;
	info: RestorantInfo;
	order: RestorantOrder;
}

export interface Collection {
	altText: string;
	collectionId: string;
	createdAt: string;
	imageId: string;
	serviceAreaId: string;
	text: string;
	type: string;
	updatedAt: string;
	__typename: string;
	_id: string;
}
export interface DeliveryData {
	__typename: string;
	time: 25;
	duration: string;
	distance: string;
}
export interface Restaurant {
	__typename: string;
	type: string;
	_id: string;
	serviceAreaId: string;
	restaurantId: string;
	name: string;
	imageId: string;
	cuisines: string[];
	veg: boolean;
	rating: number;
	votesString: string;
	costForTwo: string;
	areaName: string;
	locality: string;
	discount: string;
	delivery: DeliveryData;
	createdAt: string;
	updatedAt: string;
}
export interface Restaurants {
	__typename: string;
	serviceAreaId: string;
	page: number;
	limit: number;
	count: number;
	totalCount: number;
	documents: Restaurant[];
}
