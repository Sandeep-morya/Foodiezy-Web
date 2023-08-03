export type Theme = "light" | "dark";

export interface Coordinates {
	lat: string | number;
	lng: string | number;
}
export interface GeoLocation {
	coordinates: Coordinates | null;
	display_name: string | null;
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
