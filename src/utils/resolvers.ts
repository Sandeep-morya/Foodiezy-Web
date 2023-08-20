import { gql } from "@apollo/client";

export const GET_SERVICE_AREA_DATA = gql`
	query getServiceAreaData($serviceAreaName: String!) {
		getServiceAreaData(serviceAreaName: $serviceAreaName) {
			_id
			name
			lat
			lng
			collections {
				_id
				serviceAreaId
				imageId
				text
				altText
				collectionId
				createdAt
				updatedAt
				type
			}
			createdAt
			updatedAt
		}
	}
`;

export const GET_RESTAURANTS = gql`
	query GetRestaurants(
		$serviceAreaId: ID!
		$queryParams: String
		$page: Int
		$limit: Int
	) {
		getRestaurants(
			serviceAreaId: $serviceAreaId
			queryParams: $queryParams
			page: $page
			limit: $limit
		) {
			serviceAreaId
			page
			limit
			count
			totalCount
			documents {
				type
				_id
				serviceAreaId
				restaurantId
				name
				imageId
				cuisines
				veg
				rating
				votesString
				costForTwo
				areaName
				locality
				discount
				delivery {
					time
					duration
					distance
				}
				createdAt
				updatedAt
			}
		}
	}
`;

export const GET_RESTAURANT = gql`
	query GetRestaurant($id: ID!) {
		restaurant: getRestaurant(id: $id) {
			type
			_id
			serviceAreaId
			restaurantId
			name
			imageId
			cuisines
			veg
			rating
			votesString
			costForTwo
			areaName
			locality
			discount
			delivery {
				time
				duration
				distance
			}
			createdAt
			updatedAt
		}
	}
`;

export const REGISTER_USER = gql`
	mutation RegisterUser(
		$name: String!
		$email: String!
		$image: String
		$password: String
		$provider: String
	) {
		registerUser(
			name: $name
			email: $email
			image: $image
			password: $password
			provider: $provider
		) {
			token
			about {
				_id
				name
				email
				image
				provider
			}
		}
	}
`;
