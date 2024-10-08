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
			modified
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
	mutation Mutation(
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
				cart {
					dishId
					dishName
					category
					imageId
					price
					count
					restaurantId
					restaurantName
				}
			}
		}
	}
`;

export const MUTATE_CART = gql`
	mutation Mutation($cartInput: [CartInput!]!, $userId: ID!) {
		mutateCart(cartInput: $cartInput, userId: $userId)
	}
`;

export const GET_USER = gql`
	query GetUser($id: ID!) {
		getUser(id: $id) {
			_id
			name
			email
			image
			provider
			cart {
				dishId
				dishName
				category
				imageId
				price
				count
				restaurantId
				restaurantName
			}
		}
	}
`;

export const GET_IMAGE = gql`
	query GetRestaurants($serviceAreaId: ID!, $limit: Int) {
		getRestaurants(serviceAreaId: $serviceAreaId, limit: $limit) {
			documents {
				imageId
			}
		}
	}
`;
