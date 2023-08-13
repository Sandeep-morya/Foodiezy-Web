import axios from 'axios';

import type { AxiosResponse } from "axios";
import type { Coordinates, CoordinatesResult, MapLocations } from "../types";
const API = axios.create({ baseURL: "https://geocode.maps.co" });

export function geolocationError(error: GeolocationPositionError) {
	switch (error.code) {
		case error.PERMISSION_DENIED:
			console.log("User denied the request for Geolocation.");
			break;
		case error.POSITION_UNAVAILABLE:
			console.log("Location information is unavailable.");
			break;
		case error.TIMEOUT:
			console.log("The request to get user location timed out.");
			break;
		default:
			console.log("An unknown error occurred.");
			break;
	}
}

export const findAddress = async (query: string) => {
	try {
		const { data }: AxiosResponse<MapLocations[]> = await API.get("/search", {
			params: { q: query },
		});
		return data;
	} catch (error) {
		throw new Error("Unable to get Address");
	}
};
//geocode.maps.co/?lat=30.916608&lon=75.8677504

export const findAddressWithCoordinates = async (coordinates: Coordinates) => {
	try {
		const { data }: AxiosResponse<CoordinatesResult> = await API.get(
			"/reverse",
			{ params: { lat: coordinates.lat, lon: coordinates.lng } },
		);
		return data;
	} catch (error) {
		throw new Error("Unable to get Address");
	}
};
