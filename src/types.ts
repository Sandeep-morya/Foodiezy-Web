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
export interface ServiceArea {
	_id?: string;
	name: string;
	lat?: number;
	lng?: number;
}
export interface Device {
	theme: Theme;
	notfications: string[];
	serviceArea: ServiceArea | null;
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
	_id: string;
}
export interface DeliveryData {
	time: number;
	duration: string;
	distance: string;
}
export interface Restaurant {
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
	costForTwo: number;
	areaName: string;
	locality: string;
	discount: string;
	delivery: DeliveryData;
	createdAt: string;
	updatedAt: string;
}
export interface Restaurants {
	serviceAreaId: string;
	page: number;
	limit: number;
	count: number;
	totalCount: number;
	modified: boolean;
	documents: Restaurant[];
}

export type SortType =
	| "default"
	| "title"
	| "rating"
	| "h2l"
	| "l2h"
	| "delivery";

export interface ParamsObject {
	sortby?: string | null;
	foodType: string[];
	cuisine: string[];
	delivery: string[];
	rating: string[];
	costForTwo: string[];
	explore: string[];
}
export interface MenuItem {
	card: Card;
}
export interface Card {
	info: Info;
}

export interface Info {
	id: string;
	name: string;
	category: string;
	description: string;
	imageId: string;
	inStock: number;
	isVeg: number;
	price: number;
	addons: Addon[];
	itemAttribute: ItemAttribute;
	ribbon: Ribbon;
	showImage: boolean;
	isBestseller: boolean;
	ratings: Ratings;
}

export interface Addon {
	groupId: string;
	groupName: string;
	choices: Choice[];
	maxAddons: number;
	maxFreeAddons: number;
}

export interface Choice {
	id: string;
	name: string;
	price: number;
	isVeg: number;
	isEnabled: number;
	inStock?: number;
}

export interface ItemAttribute {
	vegClassifier: string;
	portionSize: string;
}

export interface Ratings {
	aggregatedRating: AggregatedRating;
}

export interface AggregatedRating {
	rating: string;
	ratingCount: string;
	ratingCountV2: string;
}

export interface Ribbon {
	text: string;
	textColor: string;
	topBackgroundColor: string;
	bottomBackgroundColor: string;
}

export interface MenuCard {
	title: string;
	categories: MenuCard[];
	itemCards: MenuItem[];
}

export interface CartDish {
	dishId: string;
	dishName: string;
	imageId: string;
	price: number;
	count: number;
	category: string;
}

export interface CartItem extends CartDish {
	restaurantId: string;
	restaurantName: string;
}

export interface CartRestaurant {
	restaurantId: string;
	restaurantName: string;
	dishes: CartDish[];
}

export interface UserData {
	_id: string;
	name: string;
	email: string;
	image: string;
	provider: string;
}

export interface User {
	token: string | null;
	about: UserData | null;
}
